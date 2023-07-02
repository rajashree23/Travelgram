import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


export const UserList = ({ user }) => {
  return (
    <NavLink to={`/profile/${user.username}`}  className="find-user">
      <div className="profile-pic-container">
        <LazyLoadImage src={user.profileAvatar} alt={user.username} effect="blur"  />
      </div>
      <div>
        <p>{`${user.firstName} ${user.lastName}`}</p>
        <p>@{user.username}</p>
      </div>
    </NavLink>
  );
};
