import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import UseClass from "./UseClass";

const ApproveClass = () => {
  const [myClass] = UseClass();

  const [axiosSecure] = UseAxios();
  const {
    data: approveClass = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["approveClass"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myclass/${myClass._id}`);
      console.log("here", res);
      return res.data;
    },
  });

  return [approveClass, refetch, loading];
};

export default ApproveClass;
