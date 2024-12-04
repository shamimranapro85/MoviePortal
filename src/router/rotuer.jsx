import { createBrowserRouter, NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
let theme = localStorage.getItem("theme");
export const router = createBrowserRouter([
  {
    //its home layout for over all website work be opening
    path: "/",
    element: (
      <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <div
          className="absolute bottom-5 right-5 btn"
          onClick={() => {
            const theme = localStorage.getItem("theme");

            document.documentElement.setAttribute(
              "data-theme",
              theme ? "light" : "dark"
            );
            localStorage.setItem("theme", theme ? "" : true);
          }}
        >
          {" "}
          {<FaMoon />}
        </div>
      </>
    ),
    children: [
      {
        path: "auth",
        element: (
          <>
            <Outlet></Outlet>
          </>
        ),
        children: [
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "register",
            element: <Register></Register>,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: (
      <>
        <div className="flex min-h-[90vh] justify-center items-center flex-col text-center gap-3">
          <span>oops! you are visit wrong url/rout</span>
          <h1 className="text-3xl font-bold text-red-500">Page Not Found</h1>
          <NavLink className={"btn bg-green-500"} to={"/"}>
            Go Back to HOME
          </NavLink>
        </div>
      </>
    ),
  },
]);
