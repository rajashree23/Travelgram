import { useState } from "react";

import { useAuthContext } from "../../context/auth/AuthContext";
import { getSuggestedUsers } from "../../utils/users";
import { FollowbarCard } from "./component/FollowbarCard";
import { UserList } from "./component/UsersList";

import "./followbar.mobile.layout.css";
import "./followbar.desktop.layout.css";

export const Followbar = () => {
  const { authUser, users, dispatch, token } = useAuthContext();
  const [input, setInput] = useState("");

  const suggestedUsers = getSuggestedUsers(users, authUser);

  const findUsersList =
    input &&
    users.filter(
      (user) =>
        user.username.includes(input) ||
        user.firstName.toLowerCase().includes(input.toLowerCase()) ||
        user.lastName.toLowerCase().includes(input.toLowerCase())
    );

  return (
    <div className="followbar-container">
      <input
        type="text"
        placeholder="Search People"
        className="input-field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input && (
        <div className="find-users-container">
          {findUsersList.length === 0 && <p>No users found</p>}
          {findUsersList.map((user) => (
            <UserList key={user._id} user={user} />
          ))}
        </div>
      )}
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
