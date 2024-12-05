import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, userState } from "../redux/slice/normalState";
import CardSlider from "./Features/slider/CardSlider";
import { fetchData } from "../redux/slice/fetchDAta";

export default function Home() {
  const state = useSelector((state) => state.normalState);
  const allMovieState = useSelector((state) => state.fetchDAtaREdux);
  const dispatch = useDispatch();

  const [allMovie, setAllMovie] = useState(null);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    // console.log(state);

    if (allMovieState.status == "succeeded") {
      setAllMovie(allMovieState.data);
      console.log(allMovie);
    }
  }, [allMovieState]);

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

      <div className="">
        {allMovie &&
          allMovie.map((movie, index) => {
            return <img src={movie["Movie Poster"]} key={index}></img>;
          })}
      </div>
      <CardSlider />
    </>
  );
}
