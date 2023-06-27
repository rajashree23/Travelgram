import { PostCard } from "../../../component/PostCard.jsx/PostCard";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { useDataContext } from "../../../context/data/DataContext";

export const Posts = () => {
  const { posts, dispatch } = useDataContext();
  const {
    authUser,
    users,
    token,
    bookmarks,
    dispatch: authDispatch,
  } = useAuthContext();

  return (
    <div>
      <div className="post-container">
        {posts.map((post) => (
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
