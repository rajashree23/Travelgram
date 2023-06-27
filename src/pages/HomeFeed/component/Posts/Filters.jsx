import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faArrowTrendUp,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "../../homefeed.mobile.layout.css";
import "../../homefeed.desktop.layout.css";
export const Filters = () => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  return (
    <>
      <div className="filter-container">
        <p>Latest Posts</p>

        <FontAwesomeIcon
          className="filter-icon"
          icon={faFilter}
          onClick={() => setShowFilterMenu((prev) => !prev)}
        />

        {showFilterMenu && (
          <ul className="filter-menu">
            <li>
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <p>Trending</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleUp} />
              <p>Latest</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDown} />
              <p>Oldest</p>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
