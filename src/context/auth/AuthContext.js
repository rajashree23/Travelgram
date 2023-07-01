import { createContext, useContext, useReducer, useEffect } from "react";
import { AuthReducer, authInitialState } from "../../reducer/auth/AuthReducer";
import { getAllUsers } from "../../services/auth/authService";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, authInitialState);
  useEffect(() => {
    getAllUsers(dispatch);
  }, [state.authUser]);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authUser: state.authUser ? JSON.parse(state.authUser) : null,
        users: state.users,
        bookmarks: state.bookmarks,
        dispatch: dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
