import { useAuthContext } from "../../../../context/auth/AuthContext";
import { useDataContext } from "../../../../context/data/DataContext";
import {
  getFilteredPostsByFilterOption,
  getFilteredPostsOfFollowing,
} from "../../../../utils/posts";
import { CreatePost } from "./CreatePost";
import { Filters } from "./Filters";
import { PostCard } from "../../../../component/PostCard.jsx/PostCard";

export const Posts = () => {
  const { posts, dispatch, filterOption } = useDataContext();
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
            post={post}
            key={post._id}
            users={users}
            token={token}
            dispatch={dispatch}
            authUser={authUser}
            authDispatch={authDispatch}
            bookmarks={bookmarks}
          />
        ))}
      </div>
    </div>
  );
};
