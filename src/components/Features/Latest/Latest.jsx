import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LatestMovie } from "../../../redux/slice/LatestMOvie";
import MoonLoader from "react-spinners/MoonLoader";

export default function Latest() {
  const dispatch = useDispatch();
  const LtsState = useSelector((state) => state.LatestMOvied);

  useEffect(() => {
    dispatch(LatestMovie());
  },[]);
  console.log(LtsState);
  

  return (
    <div>
      {LtsState.loading ? (
        <div className="flex justify-center items-center">
          <MoonLoader size={25}></MoonLoader>
        </div>
      ) : (
        <div className="w-full grid gap-3 py-4 overflow-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {LtsState.data.map((movie, index) => {
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
                  
                  </div>
                </div>
              );
            })}
          </div>
      )}
    </div>
  );
}
