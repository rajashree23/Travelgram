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
import { useDataContext } from "../../../../context/data/DataContext";
import { ACTION_TYPES } from "../../../../utils/actionTypeConstants";
export const Filters = () => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const { dispatch, filterOption } = useDataContext();

  return (
    <>
      <div className="filter-container">
        <p>{filterOption} Posts</p>

        <FontAwesomeIcon
          className="filter-icon"
          icon={faFilter}
          onClick={() => setShowFilterMenu((prev) => !prev)}
        />

        {showFilterMenu && (
          <ul className="filter-menu">
            <li
              onClick={() =>
                dispatch({ type: ACTION_TYPES.SET_FILTER, payload: "Trending" })
              }
            >
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <p>Trending</p>
            </li>
            <li
              onClick={() =>
                dispatch({ type: ACTION_TYPES.SET_FILTER, payload: "Latest" })
              }
            >
              <FontAwesomeIcon icon={faAngleUp} />
              <p>Latest</p>
            </li>
            <li
              onClick={() =>
                dispatch({ type: ACTION_TYPES.SET_FILTER, payload: "Oldest" })
              }
            >
              <FontAwesomeIcon icon={faAngleDown} />
              <p>Oldest</p>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
