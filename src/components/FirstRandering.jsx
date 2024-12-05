import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { authFirbase } from "../firebase/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { changeName, loaded, userState } from "../redux/slice/normalState";

import { Flip, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

export default function FirstRandering({ children }) {
  const state = useSelector((state) => state.normalState);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirbase, (user) => {
      if (user) {
        dispatch(userState(user));
      } else {
        dispatch(userState(null));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [state]);

  return (
    <div>
      {children}
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
        transition={Flip}
      />
    </div>
  );
}
