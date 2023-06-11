import { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";

const UseSelectClass = () => {
  const [axiosSecure] = UseAxios();
  const { user } = useContext(AuthContext);
  const { data: selectClass = [], refetch } = useQuery({
    queryKey: ["selectClass"],
    queryFn: async () => {
      const res = await axiosSecure(`/selectClass/${user?.email}`);
      return res.data;
    },
  });
  return [selectClass, refetch];
};

export default UseSelectClass;
