import { toast } from "react-toastify";

import { followUser, getAllUsers } from "../../../services/auth/authService";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const FollowbarCard = ({ suggestedUser, dispatch, token }) => {
  return (
    <div className="follow-card-container">
      <div className="profile-pic-container">
        {suggestedUser.profileAvatar ? (
          <LazyLoadImage src={suggestedUser.profileAvatar} alt={suggestedUser.username} effect="blur"  />
        ) : (
          <p className="default-user-profile">
            {suggestedUser.username[0].toUpperCase()}
          </p>
        )}
      </div>
      <div className="user-details">
        <NavLink className="user-detail-link" to={`/profile/${suggestedUser.username}`}>
          <p>{`${suggestedUser.firstName} ${suggestedUser.lastName}`}</p>
          <p className="username">{`@${suggestedUser.username}`}</p>
        </NavLink>
        <button
          className="secondary-button"
          onClick={() => {
            followUser(suggestedUser._id, dispatch, token, toast);
            getAllUsers(dispatch);
          }}
        >
          Follow
        </button>
      </div>
    </div>
  );
};
