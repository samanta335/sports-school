import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import UseAxios from "./UseAxios";
const UseAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = UseAxios();
  const { data: isAdmin, loader: adminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      // console.log("res from axios", res);
      return res.data.admin;
    },
  });
  return [isAdmin, adminLoading];
};

export default UseAdmin;
