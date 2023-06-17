import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const dataInitialState = {
  posts: [],
  loader: false,
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
