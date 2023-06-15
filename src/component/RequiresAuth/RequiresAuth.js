import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth/AuthContext";

export const RequiresAuth = ({ children }) => {
  const { token } = useAuthContext();
  const location = useLocation();

  return token ? children : <Navigate to="/login" state={{ from: location }} />;
};
