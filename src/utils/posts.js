const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDNAME}/image/upload`;

export const getFilteredPostsOfFollowing = (posts, authUser) => {
  const filteredPostsOfFollowing = posts.filter(
    (currPost) =>
      currPost.username === authUser.username ||
      authUser.following.some(({ username }) => username === currPost.username)
  );
  return filteredPostsOfFollowing;
};

export const getFilteredPostsByFilterOption = (posts, filterOption) => {
  if (filterOption === "Latest") {
    return [...posts].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } else if (filterOption === "Oldest") {
    return [...posts].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  } else if (filterOption === "Trending") {
    return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  } else {
    return posts;
  }
};

export const dateFormat = (createdAt) => {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = currentDate - createdDate;

  if (elapsed < msPerMinute) {
    return `${Math.round(elapsed / 1000)}s ago`;
  } else if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)}m ago`;
  } else if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)}h ago`;
  } else if (elapsed < msPerMonth) {
    return `${Math.round(elapsed / msPerDay)}d ago`;
  } else if (elapsed < msPerYear) {
    return `${Math.round(elapsed / msPerMonth)}mo ago`;
  } else {
    return `${Math.round(elapsed / msPerYear)}y ago`;
  }
};

export const getIsLiked = (post, authUser) =>
  post.likes.likedBy.find(
    (likedByUser) => likedByUser.username === authUser.username
  );

export const getIsBookmarked = (bookmarks, post) =>
  bookmarks.find((bookmark) => bookmark === post._id);

export const getIsOwnPost = (post, authUser) =>
  post.username === authUser.username;

export const handleImageUpload = async (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
  data.append("cloud_name", process.env.REACT_APP_CLOUDNAME);
  return fetch(CLOUDINARY_URL, {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};
