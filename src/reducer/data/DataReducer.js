import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const dataInitialState = {
  posts: [],
  loader: true,
  theme: localStorage.getItem("theme") || "dark",
  filterOption: "Latest",
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loader: false,
      };
    case ACTION_TYPES.SET_THEME:
      localStorage.setItem("theme", action.payload);
      document.documentElement.setAttribute("data-theme", action.payload);

      return {
        ...state,
        theme: action.payload,
      };
    case ACTION_TYPES.SET_FILTER:
      return {
        ...state,
        filterOption: action.payload,
      };

    default:
      return state;
  }
};
