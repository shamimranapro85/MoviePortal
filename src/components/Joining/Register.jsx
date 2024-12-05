import React, { useRef, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,

  updateProfile,
} from "firebase/auth";
import { authFirbase } from "../../firebase/firebaseAuth";
import { Flip, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()
  const [errEmail, setErrEmal] = useState("");
  const [errPass, setErrPass] = useState("");
  const [errConPass, setErrConPass] = useState("");

  const passwordForCheck = useRef()
  const onChangeEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    emailRegex.test(e.target.value)
      ? setErrEmal("")
      : setErrEmal("use @ and domain for valid email");
  };
  const onChangePass = (e) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    passwordRegex.test(e.target.value)
      ? setErrPass("")
      : setErrPass("at lest one uppercase, lowercase and must be length 6");
  };
  const confirmPassword = (e)=>{
      if(passwordForCheck.current.value == e.target.value){
        setErrConPass("");
        return
      }
      setErrConPass("password not match");
  }
const GoogleProvider = new GoogleAuthProvider()
  const signinWithGoogle =()=>{
    signInWithPopup(authFirbase,GoogleProvider).then(user =>{
      console.log(user)
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
      navigate("/")
      
    })
  }

  const handleSubmit = (e) => {


    e.preventDefault();


    if(errConPass || errEmail || errPass){
      toast.error('Fill valid information', {
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
      return 
    }

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const photUrl = e.target.photoUrl.value;

    createUserWithEmailAndPassword(authFirbase, email, password).then(
      (data) => {
        toast.success('successfully register & login', {
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
        updateProfile(authFirbase.currentUser, {
          displayName: name,
          photoURL: photUrl,
        }).then((user) => "");
        navigate("/")
      }
    ).catch(()=>{
      toast.warning('already registered or network error', {
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
    })
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Register now!</h1>
          <p className="py-6 text-center">
            Join us today! Create an account to enjoy, exclusive deals, and
            track your movie effortlessly.
          </p>
        </div>
        <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                placeholder="Enter your name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={onChangeEmail}
                type="email"
                name="email"
                placeholder="email"
                required
                className="input input-bordered"
              />
              <div className="text-red-500 ml-3">{errEmail}</div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Enter your profile photo url (optional)"
                name="photoUrl"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              ref={passwordForCheck}
                onChange={onChangePass}
                type="password"
                required
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <div className="text-red-500 ml-3">{errPass}</div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                required
                name="confirmPassword"
                type="password"
                onChange={confirmPassword}
                placeholder="again type same password"
                className="input input-bordered"
              />
               <div className="text-red-500 ml-3">{errConPass}</div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
              <label className="label">
                <p className="label-text-alt  ">
                  If you already registered? <Link className="link-hover" to={"/auth/login"}>Login</Link>
                </p>
              </label>
          <p className="btn" onClick={signinWithGoogle}>Google</p>
          </form>
        </div>
      </div>
    </div>
  );
}
