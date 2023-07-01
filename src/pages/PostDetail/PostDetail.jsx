import { useParams } from "react-router-dom";
import { useDataContext } from "../../context/data/DataContext";
import { LeftSidebar } from "../../component/Sidebar/LeftSidebar";
import { PostCard } from "../../component/PostCard.jsx/PostCard";
import { Followbar } from "../../component/Followbar/Followbar";

import "./postdetail.mobile.layout.css";
import "./postdetail.desktop.layout.css";
import { useAuthContext } from "../../context/auth/AuthContext";
import { EditPostModal } from "../../component/PostCard.jsx/component/EditPostModal";

export const PostDetail = () => {
  const { postId } = useParams();
  const { posts, dispatch, postActions } = useDataContext();
  const {
    authUser,
    users,
    token,
    bookmarks,
    dispatch: authDispatch,
  } = useAuthContext();

  const post = posts.find(({ id }) => postId === id);

  return (
    <div className="post-detail-container">
      <LeftSidebar />
      <div className="post-container">
        {!post && <p>Post loading...</p>}
        {post && (
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
        )}
      </div>
      <Followbar />
      {postActions.editModal.show && (
        <EditPostModal post={postActions.editModal.post} />
      )}
    </div>
  );
};
