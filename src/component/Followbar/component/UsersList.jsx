

export const UserList = ({ user }) => {
  return (
    <div className="find-user">
      <div className="profile-pic-container">
        <img src={user.profileAvatar} alt={user.username} />
      </div>
      <div>
        <p>{`${user.firstName} ${user.lastName}`}</p>
        <p>@{user.username}</p>
      </div>
    </div>
  );
};
