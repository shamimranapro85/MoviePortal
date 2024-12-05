import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";

export default function CheckingUser({ children }) {
  const navigate = useNavigate();
  const state = useSelector((state) => state.normalState);
  const location = useLocation()
 
  
  if (state.loading) {
    return <PuffLoader></PuffLoader>;
  } else if (!state.user) {
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
  } else {
    return children;
  }
}
