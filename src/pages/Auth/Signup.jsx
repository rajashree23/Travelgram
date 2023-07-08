import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AiOutlineArrowRight,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";

import Logo from "../../assets/Logo.svg";
import { signupUser } from "../../services/auth/authService";
import { useAuthContext } from "../../context/auth/AuthContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./auth.mobile.layout.css";
import "./auth.desktop.layout.css";

export const Signup = ({ handleToggleLoginPage }) => {
  const { token, dispatch: authDispatch } = useAuthContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const setSignUpFormHandler = (inputFieldType, e) =>
    setSignupForm((signupFormValues) => ({
      ...signupFormValues,
      [inputFieldType]: e.target.value,
    }));

  const handleSignup = (e) => {
    e.preventDefault();
    const { firstName, lastName, username, email, password } = signupForm;
    if (firstName && lastName && username && password) {
      signupUser(signupForm, authDispatch, toast);
    } else {
      if (!firstName && !lastName && !email && !username && !password) {
        toast.error("Please enter all the required fields!");
      } else if (!firstName) {
        toast.error("Please enter first name!");
      } else if (!lastName) {
        toast.error("Please enter last name!");
      } else if (!email) {
        toast.error("Please enter email!");
      } else if (!username) {
        toast.error("Please enter username!");
      } else if (!password) {
        toast.error("Please enter password!");
      }
    }
  };

  return (
    <>
      <form className="form">
        <div className="tagline-container">
          <div className="image-container">
            <LazyLoadImage
              src={Logo}
              className="logo"
              alt="logo"
              effect="blur"
            />
          </div>
          <h1>Travelgram!</h1>
        </div>
        <div className="input-fields">
          <label htmlFor="first-name" className="label">
            First name
          </label>
          <div className="input-container">
            <input
              type="text"
              id="first-name"
              required
              placeholder="Enter first name"
              value={signupForm.firstName}
              onChange={(e) => setSignUpFormHandler("firstName", e)}
            />
          </div>
          <label htmlFor="last-name" className="label">
            Last name
          </label>
          <div className="input-container">
            <input
              type="text"
              id="last-name"
              required
              placeholder="Enter last name"
              value={signupForm.lastName}
              onChange={(e) => setSignUpFormHandler("lastName", e)}
            />
          </div>
        </div>

        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="input-container">
          <input
            type="email"
            id="email"
            required
            placeholder="Enter email"
            value={signupForm.email}
            onChange={(e) => setSignUpFormHandler("email", e)}
          />
        </div>
        <label htmlFor="username" className="label">
          Username
        </label>
        <div className="input-container">
          <input
            type="text"
            id="username"
            required
            placeholder="Enter username"
            value={signupForm.username}
            onChange={(e) => setSignUpFormHandler("username", e)}
          />
        </div>

        <label htmlFor="password" className="label">
          Password
        </label>
        <div className="input-container">
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="Password"
              required
              placeholder="Enter password"
              value={signupForm.password}
              onChange={(e) => setSignUpFormHandler("password", e)}
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

        <button className="primary-button" onClick={(e) => handleSignup(e)}>
          Sign up
        </button>
        <button className="new-acc" onClick={handleToggleLoginPage}>
          Already have an account
          <AiOutlineArrowRight />
        </button>
      </form>
    </>
  );
};
