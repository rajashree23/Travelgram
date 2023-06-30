import { useLocation, useNavigate } from "react-router-dom";
import { FaMinus, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

import { getCurrentUserDetail, getIsUserFollowed } from "../../../utils/users";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { useDataContext } from "../../../context/data/DataContext";
import { getIsOwnPost } from "../../../utils/posts";
import { deletePost } from "../../../services/data/postService";
import {
  followUser,
  getAllUsers,
  unfollowUser,
} from "../../../services/auth/authService";
import { ACTION_TYPES } from "../../../utils/actionTypeConstants";

export const PostOption = ({ post, setShowOptions }) => {
  const { authUser, token, users, dispatch: authDispatch } = useAuthContext();
  const { dispatch } = useDataContext();
  const pathname = useLocation();
  const navigate = useNavigate();

  const isUserFollowed = getIsUserFollowed(authUser, post);
  const isOwnPost = getIsOwnPost(post, authUser);
  const currentUserDetail = getCurrentUserDetail(users, post);

  return (
    <ul className="filter-menu">
      {isOwnPost ? (
        <>
          <li
            onClick={(e) => {
              e.stopPropagation();
              dispatch({
                type: ACTION_TYPES.SET_EDIT_POST_MODAL,
                payload: post,
              });
              setShowOptions(false);
            }}
          >
            <FaEdit />
            <p>Edit</p>
          </li>
          <li
            onClick={(e) => {
              e.stopPropagation();
              if (pathname !== "/") navigate("/");
              deletePost(post._id, dispatch, token, toast);
              setShowOptions(false);
            }}
          >
            <FaTrash />
            <p>Delete</p>
          </li>
        </>
      ) : (
        <>
          <li>
            {isUserFollowed >= 0 ? <FaMinus /> : <FaPlus />}
            <p
              onClick={(e) => {
                e.stopPropagation();
                isUserFollowed >= 0
                  ? unfollowUser(
                      currentUserDetail._id,
                      authDispatch,
                      token,
                      toast
                    )
                  : followUser(
                      currentUserDetail._id,
                      authDispatch,
                      token,
                      toast
                    );
                getAllUsers(authDispatch);
                setShowOptions(false);
              }}
            >
              {isUserFollowed >= 0 ? "Unfollow" : "Follow"}
            </p>
          </li>
        </>
      )}
    </ul>
  );
};
