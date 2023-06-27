import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faBookmark,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/Logo_white.svg";
import { useAuthContext } from "../../context/auth/AuthContext";

import "./sidebar.mobile.layout.css";
import "./sidebar.desktop.layout.css";

export const LeftSidebar = () => {
  // const { authUser } = useAuthContext();
  return (
    <>
      <div className="left-sidebar-container">
        <div className="menu-container">
          <div className="image-container">
            <img src={Logo} alt="logo" className="logo-white" />
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
              <FontAwesomeIcon icon={faUser} />
              Profile
            </NavLink>
          </div>
        </div>

        <div className="more-container">
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

        <NavLink className="link">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <div className="link">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </>
  );
};
