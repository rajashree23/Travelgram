import { useState } from "react";

import { Login } from "./Login";
import { Signup } from "./Signup";

import "./auth.mobile.layout.css";
import "./auth.desktop.layout.css";

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
