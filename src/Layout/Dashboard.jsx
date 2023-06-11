import {
  FaBookmark,
  FaHome,
  FaMarker,
  FaPlusSquare,
  FaRegBookmark,
  FaUsers,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hook/UseAdmin";
import UseInstructor from "../Hook/UseInstructor";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  const [isInstructor] = UseInstructor();
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-20 m-5 flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu text-base p-4 w-60 h-full bg-secondary-content text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> Home
                  </NavLink>
                  <NavLink to="manageClass">
                    <FaRegBookmark></FaRegBookmark> Manage Classes
                  </NavLink>
                  <NavLink to="manageUser">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> Home
                  </NavLink>
                  <NavLink to="addClass">
                    <FaPlusSquare></FaPlusSquare>Add a Class
                  </NavLink>
                  <NavLink to="myClass">
                    <FaBookmark></FaBookmark>My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> Home
                  </NavLink>
                  <NavLink to="selectClass">
                    <FaBookmark></FaBookmark>My Selected Class
                  </NavLink>
                  <NavLink to="enrolledClass">
                    <FaMarker></FaMarker>My Enrolled Class
                  </NavLink>
                  <NavLink to="paymentHistory">
                    <FaMoneyCheckAlt></FaMoneyCheckAlt> Payment History
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
