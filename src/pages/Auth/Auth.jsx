import { useState } from "react";

import HeroImg from "../../assets/travel.jpg";

import "./auth.mobile.layout.css";
import "./auth.desktop.layout.css";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const Auth = () => {
  const [toggleLoginPage, setToggleLoginPage] = useState(true);

  const handleToggleLoginPage = () => setToggleLoginPage((prev) => !prev);

  return (
    <div className="auth-container">
      {toggleLoginPage ? (
        <Login handleToggleLoginPage={handleToggleLoginPage} />
      ) : (
        <Signup handleToggleLoginPage={handleToggleLoginPage} />
      )}
    </div>
  );
};
