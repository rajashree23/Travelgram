import axios from "axios";
import { ACTION_TYPES } from "../../utils/actionTypeConstants";

export const getPosts = async (dataDispatch) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.get("/api/posts");
    if (status === 200) {
      console.log(posts);
      dataDispatch({ type: ACTION_TYPES.SET_POSTS, payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const savePost = async (postData, dataDispatch, token, toast) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      "/api/posts",
      { postData },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: ACTION_TYPES.SET_POSTS, payload: posts });
      toast.success("Posted successfully");
    }
  } catch (error) {
    console.log(error);
    toast.error("Couldn't be posted");
  }
};

export const likePost = async (postId, dataDispatch, token) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: ACTION_TYPES.SET_POSTS, payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const dislikePost = async (postId, dataDispatch, token) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: ACTION_TYPES.SET_POSTS, payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (postId, dataDispatch, token, toast) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.delete(
      `/api/posts/${postId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: ACTION_TYPES.SET_POSTS, payload: posts });
      toast.success("Post deleted successfully!");
    }
  } catch (error) {
    console.log(error);
    toast.error("Failed to delete post!");
  }
};
