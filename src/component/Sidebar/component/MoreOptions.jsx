import {
  BsFillBrightnessHighFill,
  BsFillArrowRightSquareFill,
  BsFillMoonFill,
} from "react-icons/bs";

import "../sidebar.mobile.layout.css";
import "../sidebar.desktop.layout.css";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { ACTION_TYPES } from "../../../utils/actionTypeConstants";
import { useDataContext } from "../../../context/data/DataContext";

export const MoreOptions = () => {
  const { dispatch } = useAuthContext();
  const { theme, dispatch: dataDispatch } = useDataContext();

  return (
    <div className="more-options-container">
      <div
        className="option-item"
        onClick={() => dispatch({ type: ACTION_TYPES.LOG_OUT })}
      >
        <BsFillArrowRightSquareFill />
        <p>Log Out</p>
      </div>
      {theme === "dark" ? (
        <div
          className="option-item"
          onClick={() =>
            dataDispatch({ type: ACTION_TYPES.SET_THEME, payload: "light" })
          }
        >
          <BsFillBrightnessHighFill />
          <p>Light Mode</p>
        </div>
      ) : (
        <div
          className="option-item"
          onClick={() =>
            dataDispatch({ type: ACTION_TYPES.SET_THEME, payload: "dark" })
          }
        >
          <BsFillMoonFill />
          <p>Dark Mode</p>
        </div>
      )}
    </div>
  );
};
