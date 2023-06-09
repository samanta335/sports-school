import { FaHome, FaRegBookmark, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hook/UseAdmin";

const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin] = UseAdmin();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu  text-base p-4 w-80 h-full bg-secondary-content text-base-content">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> Home
                  </NavLink>
                  <NavLink to="/manageClass">
                    <FaRegBookmark></FaRegBookmark> Manage Classes
                  </NavLink>
                  <NavLink to="manageUser">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link></Link>
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
