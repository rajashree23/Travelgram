import { useState, useRef } from "react";
import { FiTrendingUp } from "react-icons/fi";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { MdTune } from "react-icons/md";

import { useDataContext } from "../../../../context/data/DataContext";
import { ACTION_TYPES } from "../../../../utils/actionTypeConstants";

import "../../homefeed.mobile.layout.css";
import "../../homefeed.desktop.layout.css";
import { useClickOutside } from "../../../../customHooks/useClickOutside";

export const Filters = () => {
  const filterRef = useRef();
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const { dispatch, filterOption } = useDataContext();

  useClickOutside(filterRef, setShowFilterMenu);

  return (
    <div className="filter-container">
      <p>{filterOption} Posts</p>
      <div
        ref={filterRef}
        onClick={() => setShowFilterMenu((prev) => !prev)}
        className="filter-icon"
      >
        <MdTune />
      </div>

      {showFilterMenu && (
        <ul className="filter-menu">
          <li
            onClick={() =>
              dispatch({ type: ACTION_TYPES.SET_FILTER, payload: "Trending" })
            }
          >
            <FiTrendingUp />
            <p>Trending</p>
          </li>
          <li
            onClick={() =>
              dispatch({ type: ACTION_TYPES.SET_FILTER, payload: "Latest" })
            }
          >
            <AiOutlineArrowUp />
            <p>Latest</p>
          </li>
          <li
            onClick={() =>
              dispatch({ type: ACTION_TYPES.SET_FILTER, payload: "Oldest" })
            }
          >
            <AiOutlineArrowDown />
            <p>Oldest</p>
          </li>
        </ul>
      )}
    </div>
  );
};
