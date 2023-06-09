import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import UseAdmin from "../Hook/UseAdmin";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import UseInstructor from "../Hook/UseInstructor";

const AdminInstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = UseAdmin();
  const [isInstructor, instructorLoading] = UseInstructor();
  const location = useLocation();

  if (loading || adminLoading || instructorLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminInstructorRoute;
