import { NavLink } from "react-router-dom";

export const UserList = ({ user }) => {
  return (
    <NavLink to={`/profile/${user.username}`}  className="find-user">
      <div className="profile-pic-container">
        <img src={user.profileAvatar} alt={user.username} />
      </div>
      <div>
        <p>{`${user.firstName} ${user.lastName}`}</p>
        <p>@{user.username}</p>
      </div>
    </NavLink>
  );
};
