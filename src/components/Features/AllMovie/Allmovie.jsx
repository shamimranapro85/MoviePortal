import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllMOvie } from "../../../redux/slice/allMovie";
import MoonLoader from "react-spinners/MoonLoader";

export default function Allmovie() {
  const state = useSelector((state) => state.allMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    (async() => {
     await dispatch(AllMOvie());
    })();
  }, []);
  console.log("i am all movie data static state", state);
console.log(state.data && "true");
console.log(state.data );

  return (
    <>
      {state.loading ? (
        <div className="w-full flex justify-center items-center h-[90vh]">
          <MoonLoader color={"#123abc"} size={150} />
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <div className="w-full grid gap-3 grid-cols-3">
            {state.data.map((movie, index) => {
              return (
                <>
                  <div className="rounded-md relative h-32 hover:bg-red-400 overflow-hidden shadow-md ">
                    <img
                      src={movie.PosterUrl}
                      draggable="false"
                      className="rounded-md object-cover self-center absolute h-full w-full top-0 left-0 z-0"
                      alt=""
                    />
                    <div className="bg-black/60 p-3 relative h-full w-full text-center z-50">
                      <h1 className="text-white shadow-lg text-xl">
                        {" "}
                        {movie.movieTitle}
                      </h1>
                      <div className="flex w-full justify-center flex-col !text-start items-start  gap-2">
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
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
