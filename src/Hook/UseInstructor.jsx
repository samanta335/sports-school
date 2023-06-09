import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import UseAxios from "./UseAxios";

const UseInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = UseAxios();
  const { data: isInstructor, loader: instructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      return res.data.instructor;
    },
  });
  return [isInstructor, instructorLoading];
};

export default UseInstructor;
