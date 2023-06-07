import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const withoutHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");
  return (
    <div>
      {withoutHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {withoutHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
