import { ACTION_TYPES } from "../../utils/actionTypeConstants";
import { Cloudinary } from "@cloudinary/url-gen";

export const dataInitialState = {
  posts: [],
  loader: false,
  cloudinary: new Cloudinary({ cloud: { cloudName: "di7drmeev" } }),
  theme: localStorage.getItem("theme") || "dark",
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ACTION_TYPES.SET_THEME:
      localStorage.setItem("theme", action.payload);
      document.documentElement.setAttribute("data-theme", action.payload);

      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
