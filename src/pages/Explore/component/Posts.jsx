import { PostCard } from "../../../component/PostCard.jsx/PostCard";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { useDataContext } from "../../../context/data/DataContext";
import { getFilteredPostsByFilterOption } from "../../../utils/posts";

export const Posts = () => {
  const { posts, dispatch } = useDataContext();
  const {
    authUser,
    users,
    token,
    bookmarks,
    dispatch: authDispatch,
  } = useAuthContext();
  console.log(posts)
  const filteredPosts = getFilteredPostsByFilterOption(posts, "Latest");

  return (
    <div>
      <div className="post-container">
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
