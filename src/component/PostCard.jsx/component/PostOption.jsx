import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
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

export const PostOption = ({ post }) => {
  const { authUser, token, users ,dispatch:authDispatch} = useAuthContext();
  const { dispatch } = useDataContext();
  const isUserFollowed = getIsUserFollowed(authUser, post);
  const isOwnPost = getIsOwnPost(post, authUser);
  const currentUserDetail = getCurrentUserDetail(users, post);

  const handlePostDelete = (postId) =>
    deletePost(postId, dispatch, token, toast);

  return (
    <ul className="filter-menu">
      {isOwnPost ? (
        <>
          <li>
            <FontAwesomeIcon icon={faPenToSquare} />
            <p>Edit</p>
          </li>
          <li onClick={() => handlePostDelete(post._id)}>
            <FontAwesomeIcon icon={faTrash} />
            <p>Delete</p>
          </li>
        </>
      ) : (
        <>
          <li>
            <FontAwesomeIcon icon={faMinus} />
            {isUserFollowed >= 0 && (
              <p
                onClick={() => {
                  unfollowUser(currentUserDetail._id, authDispatch, token, toast);
                  getAllUsers(authDispatch);
                }}
              >
                Unfollow
              </p>
            )}
            {isUserFollowed === -1 && (
              <p
                onClick={() => {
                  followUser(currentUserDetail._id, authDispatch, token, toast);
                  getAllUsers(authDispatch);
                }}
              >
                Follow
              </p>
            )}
          </li>
        </>
      )}
    </ul>
  );
};
