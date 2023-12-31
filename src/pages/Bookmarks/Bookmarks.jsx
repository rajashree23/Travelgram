import { CgUnavailable } from "react-icons/cg";

import { useDataContext } from "../../context/data/DataContext";
import { LeftSidebar } from "../../component/Sidebar/LeftSidebar";
import { PostCard } from "../../component/PostCard.jsx/PostCard";
import { Followbar } from "../../component/Followbar/Followbar";

import "./bookmarks.mobile.layout.css";
import "./bookmarks.desktop.layout.css";
import { useAuthContext } from "../../context/auth/AuthContext";

export const Bookmarks = () => {
  const { posts, dispatch } = useDataContext();
  const {
    authUser,
    users,
    token,
    bookmarks,
    dispatch: authDispatch,
  } = useAuthContext();

  const bookmarkPosts = posts.filter(({ _id }) => bookmarks.includes(_id));

  return (
    <div className="bookmarks-detail-container">
      <LeftSidebar />
      <div>
        <div className="post-container">
          {bookmarks.length === 0 && (
            <div className="no-bookmark">
              <p>No bookmarked posts!</p>
              <CgUnavailable />
            </div>
          )}
          {bookmarkPosts.map((post) => (
            <PostCard
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
      </div>
      <Followbar />
    </div>
  );
};
