import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AiOutlineArrowRight,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";

import Logo from "../../assets/Logo.svg";
import { useAuthContext } from "../../context/auth/AuthContext";
import { loginUser } from "../../services/auth/authService";

import "./auth.mobile.layout.css";
import "./auth.desktop.layout.css";

export const Login = ({ handleToggleLoginPage }) => {
  const { token, dispatch: authDispatch } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (token) {
      if (location?.state?.from?.pathname)
        navigate(location.state.from.pathname);
      else navigate("/");
    }
  }, [token, location, navigate]);

  const setLoginFormHandler = (inputFieldType, e) =>
    setLoginForm((loginFormValues) => ({
      ...loginFormValues,
      [inputFieldType]: e.target.value,
    }));

  const handleLogin = (e, type) => {
    e.preventDefault();
    if (type === "guest") {
      loginUser(
        { username: "rajashree", password: "1234" },
        authDispatch,
        toast
      );
    } else {
      if (loginForm.username && loginForm.password) {
        loginUser(loginForm, authDispatch, toast);
      } else {
        if (!loginForm.username && !loginForm.password) {
          toast.error("Please enter username and password!");
        } else if (!loginForm.username) {
          toast.error("Please enter username!");
        } else if (!loginForm.password) {
          toast.error("Please enter password!");
        }
      }
    }
  };

  return (
    <>
      <form className="form">
        <div className="tagline-container">
          <div className="image-container">
            <img src={Logo} className="logo" alt="logo" />
          </div>
          <h1>Travelgram!</h1>
        </div>

        <label htmlFor="username" className="label">
          Username
        </label>
        <div className="input-container">
          <input
            value={loginForm.username}
            required
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={(e) => setLoginFormHandler("username", e)}
          />
        </div>

        <label htmlFor="password" className="label">
          Password
        </label>
        <div className="input-container">
          <div className="password-container">
            <input
              value={loginForm.password}
              type={showPassword ? "text" : "password"}
              id="Password"
              required
              placeholder="Enter password"
              onChange={(e) => setLoginFormHandler("password", e)}
            />
            {showPassword ? (
              <AiFillEye
                className="password-icon"
                onClick={() =>
                  setShowPassword((prevPasswordVal) => !prevPasswordVal)
                }
              />
            ) : (
              <AiFillEyeInvisible
                className="password-icon"
                onClick={() =>
                  setShowPassword((prevPasswordVal) => !prevPasswordVal)
                }
              />
            )}
          </div>
        </div>

        <button className="primary-button" onClick={(e) => handleLogin(e)}>
          Login
        </button>
        <button
          className="secondary-button"
          onClick={(e) => handleLogin(e, "guest")}
        >
          Login as Guest
        </button>
        <button className="new-acc" onClick={handleToggleLoginPage}>
          Create new account
          <AiOutlineArrowRight />
        </button>
      </form>
    </>
  );
};
