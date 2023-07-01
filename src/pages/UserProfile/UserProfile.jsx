import { useParams } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

import { useDataContext } from "../../context/data/DataContext";
import { LeftSidebar } from "../../component/Sidebar/LeftSidebar";
import { Followbar } from "../../component/Followbar/Followbar";
import { useAuthContext } from "../../context/auth/AuthContext";
import { getOwnPosts } from "../../utils/posts";
import { PostCard } from "../../component/PostCard.jsx/PostCard";
import { EditPostModal } from "../../component/PostCard.jsx/component/EditPostModal";

import "./userprofile.mobile.layout.css";
import "./userprofile.desktop.layout.css";
import { useState } from "react";
import { EditUserProfile } from "./component/EditProfile";
import { getIsUserFollowed } from "../../utils/users";
import { ACTION_TYPES } from "../../utils/actionTypeConstants";
import { followUser, getAllUsers, unfollowUser } from "../../services/auth/authService";

export const UserProfile = () => {
  const { posts, dispatch, postActions } = useDataContext();
  const [showEditProfile, setShowEditProfile] = useState();
  const {
    authUser,
    users,
    token,
    bookmarks,
    dispatch: authDispatch,
  } = useAuthContext();

  const { username } = useParams();
  const user = users.find((user) => user.username === username);
  const postCount = posts.reduce(
    (count, currPost) => (currPost.username === username ? ++count : count),
    0
  );
  const ownPosts = getOwnPosts(posts, username);
  const isUserFollowed = authUser.following.findIndex(
    (followedUser) => username === followedUser.username
  );

  return (
    <div className="user-profile-container">
      <LeftSidebar />
      <div>
        {user && (
          <>
            <div className="user-container">
              <div className="profile-container">
                <img src={user.profileAvatar} alt={username[0]} />
              </div>
              <h2>{`${user.firstName} ${user.lastName}`}</h2>
              <p className="username">@{username}</p>
              <p>{user.bio}</p>
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noreferrer"
              >
                {user.website}
              </a>
              {authUser.username === username ? (
                <div className="button-container">
                  <button
                    className="secondary-button"
                    onClick={() => setShowEditProfile((prev) => !prev)}
                  >
                    Edit Profile
                  </button>
                  <FiLogOut />
                </div>
              ) : (
                <div className="button-container">
                  <button
                    className="secondary-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      isUserFollowed >= 0
                        ? unfollowUser(user._id, authDispatch, token, toast)
                        : followUser(user._id, authDispatch, token, toast);
                      getAllUsers(authDispatch);
                    }}
                  >
                    {isUserFollowed === -1 ? "Follow" : "Unfollow"}
                  </button>
                  {authUser.username === username && (
                    <FiLogOut
                      className="icon"
                      onClick={() =>
                        authDispatch({ type: ACTION_TYPES.LOG_OUT })
                      }
                    />
                  )}
                </div>
              )}

              <div className="user-details">
                <div className="detail">
                  <p>{user.following.length}</p>
                  <p>Following</p>
                </div>
                <div className="detail">
                  <p>{user.followers.length}</p>
                  <p>Followers</p>
                </div>
                <div className="detail">
                  <p>{postCount}</p>
                  <p>Posts</p>
                </div>
              </div>
            </div>
            <div>
              {ownPosts.map((post) => (
                <PostCard
                  key={post._id}
                  postDetails={{
                    post: post,
                    dispatch: dispatch,
                  }}
                  userDetails={{
                    users: users,
                    token: token,
                    authUser: authUser,
                    authDispatch: authDispatch,
                    bookmarks: bookmarks,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <Followbar />
      {postActions.editModal.show && (
        <EditPostModal post={postActions.editModal.post} />
      )}
      <div>
        {showEditProfile && (
          <EditUserProfile
            user={user}
            setShowEditProfile={setShowEditProfile}
          />
        )}
      </div>
    </div>
  );
};
