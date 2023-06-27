import { useAuthContext } from "../../context/auth/AuthContext";

import { getSuggestedUsers } from "../../utils/users";
import { FollowbarCard } from "./FollowbarCard";

import "./followbar.mobile.layout.css";
import "./followbar.desktop.layout.css";

export const Followbar = () => {
  const { authUser, users, dispatch, token } = useAuthContext();

  const suggestedUsers = getSuggestedUsers(users, authUser);

  return (
    <div className="followbar-container">
      <input
        type="text"
        placeholder="Search People"
        className="input-field"
      />
      {suggestedUsers.length !== 0 && (
        <>
          <h1>Suggested Users</h1>
          {suggestedUsers.map((suggestedUser) => (
            <FollowbarCard
              suggestedUser={suggestedUser}
              key={suggestedUser._id}
              dispatch={dispatch}
              token={token}
            />
          ))}
        </>
      )}
    </div>
  );
};
