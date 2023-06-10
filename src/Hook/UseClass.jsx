import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
const UseClass = () => {
  const [axiosSecure] = UseAxios();
  const {
    data: myClass = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["myClass"],
    queryFn: async () => {
      const res = await axiosSecure("/myClass");
      // console.log("here", res.data);
      return res.data;
    },
  });

  return [myClass, refetch, loading];
};
export default UseClass;
