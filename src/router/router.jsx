import { createBrowserRouter, NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Login from "../components/Joining/Login";
import Register from "../components/Joining/Register";
import Footer from "../components/common/Footer";
import FavMovie from "../components/Features/FavMovie/FavMovie";
import CheckingUser from "../components/auth/CheckingUser";
import Home from "../components/Home";
import NotFound from "../components/common/NotFound";

export const router = createBrowserRouter([
  {
   
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
       <NotFound/>
      </>
    ),
  },
]);
