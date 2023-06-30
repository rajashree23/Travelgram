import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaBookmark,
  FaRegBookmark,
  FaEllipsisH,
} from "react-icons/fa";

import { dislikePost, likePost } from "../../services/data/postService";
import { dateFormat, getIsBookmarked, getIsLiked } from "../../utils/posts";
import {
  bookmarkPost,
  removeBookmarkPost,
} from "../../services/auth/authService";
import { PostOption } from "./component/PostOption";
import { getCurrentUserDetail } from "../../utils/users";
import { useClickOutside } from "../../customHooks/useClickOutside";

import "./postcard.mobile.layout.css";
import "./postcard.desktop.layout.css";

export const PostCard = ({
  postDetails: { post, dispatch },
  userDetails: { users, token, authUser, authDispatch, bookmarks },
}) => {
  const postRef = useRef();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const currentUserDetail = getCurrentUserDetail(users, post);
  const isLiked = getIsLiked(post, authUser);
  const isBookmarked = getIsBookmarked(bookmarks, post);
  const computeTime = dateFormat(post.createdAt);

  const handlePostLike = (postId) => likePost(postId, dispatch, token);
  const handlePostDislike = (postId) => dislikePost(postId, dispatch, token);
  const handleBookmark = (postId, type) =>
    type === "check"
      ? bookmarkPost(postId, authDispatch, token, toast)
      : removeBookmarkPost(postId, authDispatch, token, toast);

  useClickOutside(postRef, setShowOptions);

  return (
    <div
      className="post-card"
      ref={postRef}
      onClick={() => navigate(`/post/${post.id}`)}
    >
      <div className="profile-pic-container">
        {currentUserDetail.profileAvatar ? (
          <img
            src={currentUserDetail.profileAvatar}
            alt={currentUserDetail.username}
          />
        ) : (
          <p className="default-user-profile">
            {currentUserDetail.username[0].toUpperCase()}
          </p>
        )}
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
            <p className="date">{computeTime}</p>
          </div>
          {showOptions && (
            <PostOption post={post} setShowOptions={setShowOptions} />
          )}
          <FaEllipsisH
            className="icon"
            onClick={(e) => {
              setShowOptions((prev) => !prev);
              e.stopPropagation();
            }}
          />
        </div>

        <div className="post-content-container">
          <p>{post.content}</p>
          {post.mediaUrl && (
            <div className="post-imag-container">
              <img src={post.mediaUrl} alt="media" />
            </div>
          )}
        </div>
        <div className="icon-container">
          <div className="individual-icon-container">
            {isLiked ? (
              <FaHeart
                className="heart icon"
                onClick={(e) => {
                  handlePostDislike(post._id);
                  e.stopPropagation();
                }}
              />
            ) : (
              <FaRegHeart
                className="heart icon"
                onClick={(e) => {
                  handlePostLike(post._id);
                  e.stopPropagation();
                }}
              />
            )}
            {post.likes.likeCount > 0 && <p>{post.likes.likeCount}</p>}
          </div>

          <div className="individual-icon-container">
            <FaRegComment className="icon" />
          </div>

          {isBookmarked ? (
            <FaBookmark
              className="bookmark icon"
              onClick={(e) => {
                handleBookmark(post._id, "uncheck");
                e.stopPropagation();
              }}
            />
          ) : (
            <FaRegBookmark
              className="bookmark icon"
              onClick={(e) => {
                handleBookmark(post._id, "check");
                e.stopPropagation();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
