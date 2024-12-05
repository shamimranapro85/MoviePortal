import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { authFirbase } from "../firebase/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { userState } from "../redux/slice/normalState";

import { Flip, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FirstRandering({ children }) {
  const state = useSelector((state) => state.normalState);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirbase, (user) => {
      dispatch(userState(user))
      console.log("iam userstate main value: ",state);
    });

    return () => {
      unsubscribe();
    };
  }, [state]);
  return <div>{children}
  <ToastContainer
position="top-center"
autoClose={500}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition = {Flip}
/>
  </div>;
}
