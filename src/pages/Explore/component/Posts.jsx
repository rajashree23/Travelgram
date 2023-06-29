import { PostCard } from "../../../component/PostCard.jsx/PostCard";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { useDataContext } from "../../../context/data/DataContext";
import { getFilteredPostsByFilterOption } from "../../../utils/posts";

export const Posts = () => {
  const { posts, dispatch,postActions } = useDataContext();
  const {
    authUser,
    users,
    token,
    bookmarks,
    dispatch: authDispatch,
  } = useAuthContext();
  console.log(posts);
  const filteredPosts = getFilteredPostsByFilterOption(posts, "Latest");

  return (
    <div>
      <div className="post-container">
        {filteredPosts.map((post) => (
          <PostCard
            postDetails={{
              post: post,
              dispatch: dispatch,
              postActions: postActions,
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
    </div>
  );
};
