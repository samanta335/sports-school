import { Link, useNavigate } from "react-router-dom";
import UseClass from "../../Hook/UseClass";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import UseAxios from "../../Hook/UseAxios";

const ClassesPage = () => {
  const [myClass, refetch] = UseClass();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = UseAxios();

  const approved = myClass.filter((classes) => classes.role === "approved");

  const handlePrivate = () => {
    Swal.fire({
      title: "log in before selecting the course.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    navigate("/login");
  };
  const handleSelect = (approve) => {
    const { name, image, className, price, seat, _id } = approve;
    const select = {
      selectClass: _id,
      name,
      image,
      className,
      price,
      seat,
      email: user.email,
    };
    axiosSecure.post(`/selectClass`, select).then((res) => {
      if (res.data.insertedId) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class Selected Done.",
          showConfirmButton: false,
          timer: 1500,
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
            <th>Select Button</th>
          </tr>
        </thead>
        <tbody>
          {approved.map((approve, index) => (
            <tr key={approve._id}>
              <td>{index + 1}</td>

              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle ml-20 w-12 h-12">
                      <img
                        src={approve.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{approve.className}</td>
              <td>{approve.name}</td>
              <td>{approve.seat}</td>
              <td>{approve.price}</td>
              <td>
                {user ? (
                  <Link to="/dashboard/selectClass">
                    <button
                      onClick={() => handleSelect(approve)}
                      className="btn btn-xs btn-accent"
                    >
                      Select the Game
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => handlePrivate()}
                    className="btn btn-xs btn-accent"
                  >
                    Select the Game
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassesPage;
