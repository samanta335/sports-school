import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-full">
      <div className="navbar   bg-base-200 text-base-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content  shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/instructors">Instructors</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
            </ul>
          </div>
          <img
            className="rounded-full w-16 h-12 pr-3 "
            src="https://previews.123rf.com/images/duug/duug1206/duug120600003/13966994-sport-logo.jpg"
            alt=""
          />
          <a className="  uppercase text-xl font-semibold">Sports School</a>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal  text-base font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:flex ">
          <ul className="menu menu-horizontal text-base font-medium">
            {user ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <img
                    referrerPolicy="no-referrer"
                    className="w-16 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </li>
                <li>
                  <button
                    className="btn btn-primary ml-5 text-base"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link className="btn btn-primary text-base" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
