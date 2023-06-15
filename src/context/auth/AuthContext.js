import { createContext, useContext, useReducer } from "react";
import { AuthReducer, authInitialState } from "../../reducer/auth/AuthReducer";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, authInitialState);
  return (
    <AuthContext.Provider value={{ token: state.token, dispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
