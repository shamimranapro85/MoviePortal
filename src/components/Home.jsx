import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, userState } from "../redux/slice/normalState";
import CardSlider from "./Features/slider/CardSlider";


export default function Home() {
  const state = useSelector((state) => state.normalState);
  const dispatch = useDispatch();




 

  return (
    <>
      <div>{state.data[0]}</div>
      <button
        className="btn"
        onClick={() => {
          dispatch(changeName());
          dispatch(userState({ shami: "shamim" }));
        }}
      >
        show original name
      </button>

    
      <CardSlider />
    </>
  );
}
