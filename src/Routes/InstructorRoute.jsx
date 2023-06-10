import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import UseInstructor from "../Hook/UseInstructor";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, instructorLoadingL] = UseInstructor();

  const location = useLocation();

  if (loading || instructorLoadingL) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
