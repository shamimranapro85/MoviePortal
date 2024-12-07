import React from "react";
import { NavLink } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

export default function NotFound() {
  return (
    <div>
      <div className="flex min-h-[90vh] justify-center items-center flex-col text-center gap-3">
        <span>oops! you are visit wrong url/rout</span>
        <h1 className="text-3xl font-bold text-red-500">Page Not Found</h1>
        <NavLink className={"btn bg-green-500"} to={"/"}>
          Go Back to HOME
        </NavLink>

        
      </div>
    </div>
  );
}
