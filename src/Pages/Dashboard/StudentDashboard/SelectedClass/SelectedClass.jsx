import Swal from "sweetalert2";
import UseAxios from "../../../../Hook/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";

const SelectedClass = () => {
  const [axiosSecure] = UseAxios();

  const { data: selectClass = [], refetch } = useQuery({
    queryKey: ["selectClass"],
    queryFn: async () => {
      const res = await axiosSecure("/selectClass");
      return res.data;
    },
  });

  const handleDelete = (select) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/selectClass/${select._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto  ">
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Class Image</th>

            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectClass.map((select, index) => (
            <tr key={select._id}>
              <td>{index + 1}</td>

              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={select.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{select.className}</td>
              <td>{select.name}</td>
              <td>{select.seat}</td>
              <td>{select.price}</td>

              <td>
                <button
                  onClick={() => handleDelete(select)}
                  className="btn btn-sm bg-red-600  text-white"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;
