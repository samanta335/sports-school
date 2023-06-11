import Swal from "sweetalert2";
import UseAxios from "../../../../Hook/UseAxios";

import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import UseSelectClass from "../../../../Hook/UseSelectClass";

const SelectedClass = () => {
  const [axiosSecure] = UseAxios();
  const [selectClass, refetch] = UseSelectClass();

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
      <h1 className="text-2xl text-purple-600 text-center font-medium">
        Total Selected Class: {selectClass.length}
      </h1>
      <table className="table text-center mt-2">
        <thead className="bg-base-200">
          <tr>
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Action</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {selectClass.map((select) => (
            <tr key={select._id}>
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
              <td>
                <Link to="/dashboard/payment">
                  <button
                    className="btn btn-sm bg-purple-700 text-white"
                    // onClick={() => handleGet(select)}
                  >
                    Pay
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;
