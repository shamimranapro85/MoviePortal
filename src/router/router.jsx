import { createBrowserRouter, NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Login from "../components/Joining/Login";
import Register from "../components/Joining/Register";
import Footer from "../components/common/Footer";
import FavMovie from "../components/Features/FavMovie/FavMovie";
import CheckingUser from "../components/auth/CheckingUser";
import Home from "../components/Home";
import NotFound from "../components/common/NotFound";
import AddMovie from "../components/Features/Addmovie/AddMovie";
import Allmovie from "../components/Features/AllMovie/Allmovie";
import DetailsMOvie from "../components/Features/DetailsMOvie";
import UpdateMovie from "../components/Features/Update/Updatemovie";
import Latest from "../components/Features/Latest/Latest";

export const router = createBrowserRouter([
  {
   
    path: "/",
    element: (
      <>
        <Navbar></Navbar>
        <div className="mx-auto px-1 container">
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
        path: "/allmovies",
        element: <Allmovie></Allmovie>
      },
      {
        path: "/Latest",
        element: <Latest></Latest>
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
                <AddMovie></AddMovie>
              </CheckingUser>
            ),
          },
          {
            path: "movieDetail",
            element: (
              <CheckingUser>
                <DetailsMOvie></DetailsMOvie>
              </CheckingUser>
            ),
          },
          {
            path: "myfav",
            element: (
              <CheckingUser>
                <FavMovie></FavMovie>
              </CheckingUser>
            ),
          },
          {
            path: "Update",
            element: (
              <CheckingUser>
                <UpdateMovie></UpdateMovie>
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
