import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import UseAdmin from "../Hook/UseAdmin";
import { AuthContext } from "../Pages/Providers/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = UseAdmin();

  const location = useLocation();

  if (loading || adminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
