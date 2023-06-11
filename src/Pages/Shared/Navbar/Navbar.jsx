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
  const navRoute = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        {user ? (
          <li>
            <Link to="/dashboard">Dashboard</Link>
            <img
              referrerPolicy="no-referrer"
              className="w-12 pr-1 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <button
              className="btn btn-primary text-base"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link className="btn btn-primary text-base" to="/login">
              Login
            </Link>
          </li>
        )}
      </li>
    </>
  );

  return (
    <div className="h-full">
      <div className="navbar  bg-base-200 text-slate-600">
        <div className=" pr-16">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navRoute}
            </ul>
          </div>
          <img
            className="rounded-full w-20 h-16 pr-3"
            src="https://previews.123rf.com/images/duug/duug1206/duug120600003/13966994-sport-logo.jpg"
            alt=""
          />
          <a className="  uppercase text-2xl font-medium">Sports School</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-base font-medium">
            {navRoute}
          </ul>
        </div>
        {/* <div className="navbar-end "> */}
        {/* {user ? (
            <>
              <Link className="pr-52" to="/dashboard">
                Dashboard
              </Link>
              <img
                referrerPolicy="no-referrer"
                className="w-10 pr-1 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <button
                className="btn btn-primary text-base mr-10"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </>
          ) : (
            <Link className="btn btn-primary text-base mr-10" to="/login">
              Login
            </Link>
          )} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
