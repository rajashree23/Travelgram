import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

import Logo from "../../assets/Logo_white.svg";
import Logo_Dark from "../../assets/Logo.svg";
import { useAuthContext } from "../../context/auth/AuthContext";
import { MoreOptions } from "./component/MoreOptions";
import { useDataContext } from "../../context/data/DataContext";
import { useClickOutside } from "../../customHooks/useClickOutside";

import "./sidebar.mobile.layout.css";
import "./sidebar.desktop.layout.css";

export const LeftSidebar = () => {
  const moreRef = useRef();
  const { authUser } = useAuthContext();
  const { theme } = useDataContext();
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  useClickOutside(moreRef, setShowMoreOptions);

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
              <AiFillHome /> Home
            </NavLink>

            <NavLink to="/explore" className="link">
              <AiFillCompass />
              Explore
            </NavLink>

            <NavLink to="/bookmarks" className="link">
              <BsFillBookmarkFill />
              Bookmarks
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
              @{authUser.username}
            </NavLink>
          </div>
        </div>
        {showMoreOptions && <MoreOptions />}
        <div
          ref={moreRef}
          className="more-container"
          onClick={() =>
            setShowMoreOptions((showMoreOptionsVal) => !showMoreOptionsVal)
          }
        >
          <FaBars className="menu-icon" />
          <p>More</p>
        </div>
      </div>

      <div className="mobile-sidebar-container">
        <NavLink to="/" className="link">
          <AiFillHome />
        </NavLink>

        <NavLink to="/explore" className="link">
          <AiFillCompass />
        </NavLink>

        <NavLink to="/bookmarks" className="link">
          <BsFillBookmarkFill />
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
          ref={moreRef}
          className="link"
          onClick={() =>
            setShowMoreOptions((showMoreOptionsVal) => !showMoreOptionsVal)
          }
        >
          <FaBars />
        </div>
        {showMoreOptions && <MoreOptions showMoreOptions={showMoreOptions} />}
      </div>
    </>
  );
};
