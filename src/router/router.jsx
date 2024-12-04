import { createBrowserRouter, NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Login from "../components/Joining/Login";
import Register from "../components/Joining/Register";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import Footer from "../components/common/Footer";
import FavMovie from "../components/Features/FavMovie/FavMovie";
import CheckingUser from "../components/auth/CheckingUser";
import Home from "../components/Home";

export const router = createBrowserRouter([
  {
    //its home layout for over all website work be opening
    path: "/",
    element: (
      <>
        <Navbar></Navbar>
        <div className="mx-auto container">
          <Outlet></Outlet>
        </div>
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
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
          {
            path: "addmovie",
            element: (
              <CheckingUser>
                <FavMovie></FavMovie>
              </CheckingUser>
            ),
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
