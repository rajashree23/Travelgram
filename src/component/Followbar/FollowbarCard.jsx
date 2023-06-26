import { toast } from "react-toastify";

import { followUser, getAllUsers } from "../../services/auth/authService";

export const FollowbarCard = ({ suggestedUser, dispatch, token }) => {
  return (
    <div className="follow-card-container">
      <div className="profile-pic-container">
        <img />
      </div>
      <div className="user-details">
        <div>
          <p>{`${suggestedUser.firstName} ${suggestedUser.lastName}`}</p>
          <p className="username">{`@${suggestedUser.username}`}</p>
        </div>
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
