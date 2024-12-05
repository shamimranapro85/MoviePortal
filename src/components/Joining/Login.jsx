import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { authFirbase } from "../../firebase/firebaseAuth";
import { Flip, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const location = useLocation()
  // console.log("location from login:",location);
  

  const navigate = useNavigate();

  const handSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      authFirbase,
      e.target.email.value,
      e.target.password.value
    )
      .then((user) => {
        toast.success('Login successfully', {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip,
          });
       
          
        navigate(location.state ? location.state : "/")
      })
      .catch((err) => {
        toast.warning("email or password is incorrect", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip,
        });
      });
    // const email =
    // console.log(e.target.email.value);
  };

  const GoogleProvider = new GoogleAuthProvider();
  const signinWithGoogle = () => {
    signInWithPopup(authFirbase, GoogleProvider).then((user) => {
      // console.log(user);
      toast.success("Login successfully", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
      navigate(location.state ? location.state : "/")
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <p className="py-6 text-center">
            Welcome back! Please log in to access your account and continue
            where you left off.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="btn" onClick={signinWithGoogle}>
              Google
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
