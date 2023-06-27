import { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBookmark,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsis,
  faHeart as faFilledHeart,
  faBookmark as faFilledBookmark,
} from "@fortawesome/free-solid-svg-icons";

import { dislikePost, likePost } from "../../services/data/postService";
import { getIsBookmarked, getIsLiked } from "../../utils/posts";
import {
  bookmarkPost,
  removeBookmarkPost,
} from "../../services/auth/authService";

import "./postcard.mobile.layout.css";
import "./postcard.desktop.layout.css";
import { PostOption } from "./component/PostOption";
import { getCurrentUserDetail } from "../../utils/users";

export const PostCard = ({
  post,
  users,
  token,
  dispatch,
  authUser,
  authDispatch,
  bookmarks,
}) => {
  const [showPostMenu, setShowPostMenu] = useState(false);

  const currentUserDetail = getCurrentUserDetail(users, post);
  const isLiked = getIsLiked(post, authUser);
  const isBookmarked = getIsBookmarked(bookmarks, post);
  // const computeTime = dateFormat(post.createdAt);

  const handlePostLike = (postId) => likePost(postId, dispatch, token);
  const handlePostDislike = (postId) => dislikePost(postId, dispatch, token);
  const handleBookmark = (postId, type) =>
    type === "check"
      ? bookmarkPost(postId, authDispatch, token, toast)
      : removeBookmarkPost(postId, authDispatch, token, toast);

  return (
    <div className="post-card">
      <div className="profile-pic-container">
        <img alt='profile' />
      </div>

      <div className="post-details">
        <div className="user-details-container">
          <div className="user-details">
            <div>
            <p>
              {`${currentUserDetail.firstName} ${currentUserDetail.lastName}`}
            </p>
            <p className="username">{`@${post.username}`}</p>
            </div>
            <p className="date">11 d</p>
          </div>
          {showPostMenu && (
            <PostOption post={post} setShowPostMenu={setShowPostMenu} />
          )}
          <FontAwesomeIcon
            className="icon"
            icon={faEllipsis}
            onClick={() => setShowPostMenu((prev) => !prev)}
          />
        </div>

        <div className="post-content-container">
          <p>{post.content}</p>
        </div>
        <div className="icon-container">
          <div className="individual-icon-container">
            {isLiked ? (
              <FontAwesomeIcon
                icon={faFilledHeart}
                className="heart icon"
                onClick={() => handlePostDislike(post._id)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                className="heart icon"
                onClick={() => handlePostLike(post._id)}
              />
            )}

            {post.likes.likeCount > 0 && <p>{post.likes.likeCount}</p>}
          </div>

          <div className="individual-icon-container">
            <FontAwesomeIcon icon={faComment} className="icon" />
          </div>
          {isBookmarked ? (
            <FontAwesomeIcon
              icon={faFilledBookmark}
              className="bookmark icon"
              onClick={() => handleBookmark(post._id, "uncheck")}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBookmark}
              className="bookmark icon"
              onClick={() => handleBookmark(post._id, "check")}
            />
          )}
        </div>
      </div>
    </div>
  );
};
