import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, userState } from "../redux/slice/normalState";
import CardSlider from "./Features/slider/CardSlider";
import MoonLoader from "react-spinners/MoonLoader";
import { feturedMovie } from "../redux/slice/FeturedMovie";
import { Link, NavLink, useNavigate } from "react-router-dom";
export default function Home() {
  const state = useSelector((state) => state.normalState);
  const FeturedMOvie = useSelector((state) => state.FeturedMovie);
  const dispatch = useDispatch();
const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      await dispatch(feturedMovie());
    })();
  }, []);
  console.log(FeturedMOvie);

  if (FeturedMOvie.data.length < 1) {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <img src="https://i.ibb.co.com/PzWLFY6/7882958.webp" alt="" />
      </div>
    );
  }

  return (
    <>
      <div className="banner pb-20">
        <CardSlider />
      </div>
      <div className="Featured  w-full">
        <h1 className="text-center text-5xl py-4">Featured Movies</h1>
        {FeturedMOvie.loading ? (
          <div className="flex w-full justify-center items-center">
            <MoonLoader size={20} />
          </div>
        ) : (
          <div className="w-full grid gap-3 py-4 overflow-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {FeturedMOvie.data.map((movie, index) => {
              return (
                <div className="rounded-md overflow-hidden relative flex flex-col hover:bg-gray-200 shadow-md ">
                  <div className="h-32 relative overflow-hidden rounded-md">
                    <img
                      src={movie.PosterUrl}
                      className="self-center h-full w-full object-cover"
                      alt="Poster Not Found"
                    />
                  </div>
                  <div className="bg-black/60 p-3 relative  w-full text-center flex flex-col  grow">
                    <h1 className="text-white shadow-lg text-xl">
                      {" "}
                      {movie.movieTitle}
                    </h1>
                    <div className="flex w-full justify-center flex-col !text-start items-start   gap-2">
                      {" "}
                      <p className="text-white"> Genre: {movie.movieGenre}</p>
                      <p className="text-white"> Rating: {movie.rating}/10</p>
                      <p className="text-white"> Release: {movie.Release}</p>
                      <p className="text-white">
                        {" "}
                        Duration :
                        {Math.round(movie.duration / 60) > 60
                          ? Math.round(movie.duration / 3600) + " Day"
                          : Math.round(movie.duration / 60) + " Hour"}{" "}
                      </p>
                    </div>
                    <button
                      
                      onClick={() => {
                        navigate("/auth/movieDetail",{state: movie._id})
                      }}
                      className="btn btn-sm text-black hover:text-white bg-primary"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              );
            })}
            <NavLink
              to={"/allmovies"}
              className="btn col-span-full
             btn-sm "
            >
              See All Movie
            </NavLink>
          </div>
        )}
      </div>
      <div className=""></div>
    </>
  );
}
