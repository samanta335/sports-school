import { useState } from "react";

import { useForm } from "react-hook-form";
import UseAxios from "../../../../Hook/UseAxios";
// import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ManageClass = () => {
  const [axiosSecure] = UseAxios();
  const [disable, setDisable] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { data: myClass = [], refetch } = useQuery({
    queryKey: ["myClass"],
    queryFn: async () => {
      const res = await axiosSecure("/myClass");
      // console.log("here", res.data);
      return res.data;
    },
  });

  const onSubmit = (data) => {
    reset();
    console.log(data);

    // axiosSecure.post(`/myClass/${classes._id}`, data).then((data) => {
    //   console.log(data.data);
    //   if (data.data.insertedId) {
    //     reset();
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Feedback Send Done",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   }
    // });
  };

  const handleApprove = (classes) => {
    fetch(`http://localhost:5000/myClass/approve/${classes._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          setDisable(true);
        }
      });
  };

  const handleDeny = (classes) => {
    fetch(`http://localhost:5000/myClass/deny/${classes._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          setDisable(true);
        }
      });
  };

  return (
    <div className="overflow-x-auto p-1 ">
      <table className="table text-center">
        <thead className="bg-base-200">
          <tr>
            <th>#</th>
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {myClass.map((classes, index) => (
            <tr key={classes._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={classes.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{classes.className}</td>
              <td>{classes.name}</td>
              <td>{classes.email}</td>
              <td>{classes.seat}</td>
              <td>{classes.price}</td>
              <td>
                {classes.role === "approved"
                  ? "approved"
                  : classes.role === "denied"
                  ? "denied"
                  : "pending"}
              </td>
              <td>
                <button
                  disabled={disable}
                  onClick={() => handleApprove(classes)}
                  className="btn btn-xs btn-primary"
                >
                  Approve
                </button>

                <button
                  disabled={disable}
                  onClick={() => handleDeny(classes)}
                  className="btn btn-xs mt-2 btn-error"
                >
                  Deny
                </button>
              </td>
              <td>
                <label
                  htmlFor="my_modal_6"
                  className="btn mt-3 btn-normal btn-outline btn-secondary"
                >
                  Send Feedback
                </label>
              </td>
            </tr>
          ))}
        </tbody>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mr-4 w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-purple-700 font-medium">
                    Write your Feedback
                  </span>
                </label>
                <textarea
                  {...register("feedback")}
                  className="textarea textarea-bordered h-20"
                  placeholder="Type here"
                ></textarea>
              </div>
              <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn btn-sm btn-error">
                  <input type="submit" value="Send" />
                </label>
              </div>
            </form>
          </div>
        </div>
      </table>
    </div>
  );
};

export default ManageClass;
