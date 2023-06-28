import { toast } from "react-toastify";

import { followUser, getAllUsers } from "../../services/auth/authService";

export const FollowbarCard = ({ suggestedUser, dispatch, token }) => {
  console.log(suggestedUser);
  return (
    <div className="follow-card-container">
      <div className="profile-pic-container">
        <img
          src={suggestedUser.profileAvatar}
          alt={suggestedUser.username[0]}
        />
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
