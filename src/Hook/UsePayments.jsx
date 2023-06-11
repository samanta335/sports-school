import { useContext } from "react";
import UseAxios from "./UseAxios";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UsePayments = () => {
  const [axiosSecure] = UseAxios();
  const { user } = useContext(AuthContext);
  const { data: payment = [], refetch } = useQuery({
    queryKey: ["selectClass"],
    queryFn: async () => {
      const res = await axiosSecure(`/payments/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [payment, refetch];
};

export default UsePayments;
