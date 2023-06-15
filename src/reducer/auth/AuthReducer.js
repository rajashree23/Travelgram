import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const authInitialState = {
  token: localStorage.getItem("token"),
  user: localStorage.getItem("user"),
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_TOKEN:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case ACTION_TYPES.SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case ACTION_TYPES.LOG_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};
