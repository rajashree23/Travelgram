import { toast } from "react-toastify";

import { followUser, getAllUsers } from "../../../services/auth/authService";
import { NavLink } from "react-router-dom";

export const FollowbarCard = ({ suggestedUser, dispatch, token }) => {
  return (
    <div className="follow-card-container">
      <div className="profile-pic-container">
        {suggestedUser.profileAvatar ? (
          <img src={suggestedUser.profileAvatar} alt={suggestedUser.username} />
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
