import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser/ManageUser";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import AdminInstructorRoute from "./AdminInstructorRoute";
import MyClass from "../Pages/Dashboard/InstructorDashboard/MyClass/MyClass";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin route
      {
        path: "manageUser",
        element: (
          <AdminInstructorRoute>
            <ManageUser></ManageUser>
          </AdminInstructorRoute>
        ),
      },
      {},
      // instructor route
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
    ],
  },
]);
export default router;
