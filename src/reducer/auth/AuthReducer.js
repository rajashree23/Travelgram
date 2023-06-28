import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const authInitialState = {
  token: localStorage.getItem("token"),
  authUser: localStorage.getItem("authUser"),
  users: [],
  bookmarks: localStorage.getItem("authUser")
    ? JSON.parse(localStorage.getItem("authUser")).bookmarks
    : [],
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_TOKEN:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case ACTION_TYPES.SET_AUTH_USER:
      localStorage.setItem("authUser", JSON.stringify(action.payload));
      return {
        ...state,
        authUser: JSON.stringify(action.payload),
      };
    case ACTION_TYPES.SET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ACTION_TYPES.SET_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload,
      };
    case ACTION_TYPES.LOG_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("authUser");
      return {
        ...state,
        token: null,
        authUser: null,
      };

    default:
      return state;
  }
};
