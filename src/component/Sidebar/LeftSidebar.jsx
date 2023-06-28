import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faBookmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/Logo_white.svg";
import Logo_Dark from "../../assets/Logo.svg";
import { useAuthContext } from "../../context/auth/AuthContext";

import "./sidebar.mobile.layout.css";
import "./sidebar.desktop.layout.css";
import { MoreOptions } from "./component/MoreOptions";
import { useDataContext } from "../../context/data/DataContext";

export const LeftSidebar = () => {
  const { authUser } = useAuthContext();
  const { theme } = useDataContext();
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <>
      <div className="left-sidebar-container">
        <div className="menu-container">
          <div className="image-container">
            <img
              src={theme === "dark" ? Logo : Logo_Dark}
              alt="logo"
              className="logo-white"
            />
            <h1>Travelgram</h1>
          </div>
          <div className="sidebar-menu-container">
            <NavLink to="/" className="link">
              <FontAwesomeIcon icon={faHouse} /> Home
            </NavLink>

            <NavLink to="/explore" className="link">
              <FontAwesomeIcon icon={faCompass} />
              Explore
            </NavLink>

            <NavLink to="/bookmarks" className="link">
              <FontAwesomeIcon icon={faBookmark} />
              Bookmarks
            </NavLink>

            <NavLink className="link">
              <div className="sidebar-profile-pic-container">
                {authUser.profileAvatar ? (
                  <img src={authUser.profileAvatar} alt={authUser.username} />
                ) : (
                  <p>{authUser.username[0].toUpperCase()}</p>
                )}
              </div>
              @{authUser.username}
            </NavLink>
          </div>
        </div>
        {showMoreOptions && <MoreOptions />}
        <div
          className="more-container"
          onClick={() =>
            setShowMoreOptions((showMoreOptionsVal) => !showMoreOptionsVal)
          }
        >
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
          <p>More</p>
        </div>
      </div>

      <div className="mobile-sidebar-container">
        <NavLink to="/" className="link">
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>

        <NavLink to="/explore" className="link">
          <FontAwesomeIcon icon={faCompass} />
        </NavLink>

        <NavLink to="/bookmarks" className="link">
          <FontAwesomeIcon icon={faBookmark} />
        </NavLink>

        <NavLink className="link" to={`/${authUser.username}`}>
          <div className="sidebar-profile-pic-container">
            {authUser.profileAvatar ? (
              <img src={authUser.profileAvatar} alt={authUser.username} />
            ) : (
              <p className="default-user-profile">
                {authUser.username[0].toUpperCase()}
              </p>
            )}
          </div>
        </NavLink>

        <div
          className="link"
          onClick={() =>
            setShowMoreOptions((showMoreOptionsVal) => !showMoreOptionsVal)
          }
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        {showMoreOptions && <MoreOptions />}
      </div>
    </>
  );
};
