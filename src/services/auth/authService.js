import axios from "axios";
import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const loginUser = async (loginData, authDispatch, toast) => {
  try {
    const {
      status,
      data: { encodedToken, foundUser },
    } = await axios.post("api/auth/login", loginData);
    if (status === 200) {
      authDispatch({ type: ACTION_TYPES.SET_TOKEN, payload: encodedToken });
      authDispatch({ type: ACTION_TYPES.SET_AUTH_USER, payload: foundUser });
    }
  } catch (error) {
    console.log(error);
    toast.error(`${error.response.data.errors[0]}`);
  }
};

export const signupUser = async (loginData, authDispatch, toast) => {
  try {
    const {
      status,
      data: { encodedToken, createdUser },
    } = await axios.post("api/auth/signup", loginData);
    if (status === 201) {
      authDispatch({ type: ACTION_TYPES.SET_TOKEN, payload: encodedToken });
      authDispatch({ type: ACTION_TYPES.SET_AUTH_USER, payload: createdUser });
    }
  } catch (error) {
    console.log(error);
    toast.error(`${error.response.data.errors[0]}`);
  }
};

export const getAllUsers = async (authDispatch) => {
  try {
    const {
      status,
      data: { users },
    } = await axios.get("/api/users");
    if (status === 200) {
      authDispatch({ type: ACTION_TYPES.SET_ALL_USERS, payload: users });
    }
  } catch (error) {
    console.log(error);
  }
};

export const bookmarkPost = async (postId, authDispatch, token, toast) => {
  try {
    const {
      status,
      data: { bookmarks },
    } = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      authDispatch({ type: ACTION_TYPES.SET_BOOKMARKS, payload: bookmarks });
      toast.success("Post bookmarked successfully!");
    }
  } catch (error) {
    console.log(error);
    toast.error("Failed to bookmark post!");
  }
};

export const removeBookmarkPost = async (postId, authDispatch, token) => {
  try {
    const {
      status,
      data: { bookmarks },
    } = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      authDispatch({ type: ACTION_TYPES.SET_BOOKMARKS, payload: bookmarks });
    }
  } catch (error) {
    console.log(error);
  }
};

export const followUser = async (userId, authDispatch, token, toast) => {
  try {
    const {
      status,
      data: { user },
    } = await axios.post(
      `/api/users/follow/${userId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      authDispatch({ type: ACTION_TYPES.SET_AUTH_USER, payload: user });
      toast.success("Followed user successfully!");
    }
  } catch (error) {
    console.log(error);
    toast.error("Can not follow user!");
  }
};

export const unfollowUser = async (userId, authDispatch, token, toast) => {
  try {
    const {
      status,
      data: { updatedUser },
    } = await axios.post(
      `/api/users/unfollow/${userId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      authDispatch({ type: ACTION_TYPES.SET_AUTH_USER, payload: updatedUser });
      toast.success("Unfollowed user successfully!");
    }
  } catch (error) {
    console.log(error);
    toast.error("Can not unfollow user!");
  }
};
