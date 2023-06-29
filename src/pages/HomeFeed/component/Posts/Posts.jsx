import { useAuthContext } from "../../../../context/auth/AuthContext";
import { useDataContext } from "../../../../context/data/DataContext";
import {
  getFilteredPostsByFilterOption,
  getFilteredPostsOfFollowing,
} from "../../../../utils/posts";
import { CreatePost } from "./CreatePost";
import { Filters } from "./Filters";
import { PostCard } from "../../../../component/PostCard.jsx/PostCard";
import { EditPostModal } from "../../../../component/PostCard.jsx/component/EditPostModal";

export const Posts = () => {
  const { posts, dispatch, filterOption, postActions } = useDataContext();
  const {
    authUser,
    users,
    token,
    bookmarks,
    dispatch: authDispatch,
  } = useAuthContext();

  const filteredPostsByFollowing = getFilteredPostsOfFollowing(posts, authUser);
  const filteredPosts = getFilteredPostsByFilterOption(
    filteredPostsByFollowing,
    filterOption
  );

  return (
    <div>
      <CreatePost />
      <Filters />
      <div className="post-container">
        {filteredPosts.length === 0 && (
          <p>You need to post or follow people to view posts</p>
        )}
        {filteredPosts.map((post) => (
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
            key={post._id}
          />
        ))}
      </div>

      {postActions.editModal.show && (
        <EditPostModal post={postActions.editModal.post} />
      )}
    </div>
  );
};
