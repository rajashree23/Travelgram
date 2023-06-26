export const getSuggestedUsers = (users, authUser) => {
  const suggestedUsers = users.filter(
    (user) =>
      authUser.following.every(
        ({ username }) =>
          username !== user.username
      ) && user.username !== authUser.username
  );
  return suggestedUsers;
};

export const getIsUserFollowed = (authUser, post) => {
  return authUser.following.findIndex(
    ({ username }) => username === post.username
  );
};

export const getCurrentUserDetail = (users, post) =>
  users.find(({ username }) => username === post.username);
