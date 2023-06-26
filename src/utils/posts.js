import dayjs from "dayjs";

export const getFilteredPostsOfFollowing = (posts, authUser) => {
  const filteredPostsOfFollowing = posts.filter(
    (currPost) =>
      currPost.username === authUser.username ||
      authUser.following.some(({ username }) => username === currPost.username)
  );
  return filteredPostsOfFollowing;
};

export const dateFormat = (createdAt) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedDate = new Date(dayjs(createdAt).format("YYYY-MM-DD"));
  var t = new Date(formattedDate);
  return t.getDate() + "-" + monthNames[t.getMonth()] + "-" + t.getFullYear();
};


export const getIsLiked = (post, authUser) =>
  post.likes.likedBy.find(
    (likedByUser) => likedByUser.username === authUser.username
  );

export const getIsBookmarked = (bookmarks, post) =>
  bookmarks.find((bookmark) => bookmark === post._id);

  export const getIsOwnPost=(post,authUser)=>post.username===authUser.username;