import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllMOvie } from "../../../redux/slice/allMovie";
import MoonLoader from "react-spinners/MoonLoader";
import { useNavigate } from "react-router-dom";

export default function Allmovie() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.allMovies);
  const dispatch = useDispatch();
  
  useEffect(() => {
    (async () => {
      await dispatch(AllMOvie());
    })();
  }, [dispatch]);

  
  const data = Array.isArray(state.data) ? state.data : [];
  
  
  const [searchTerm, setSearchTerm] = useState('');

 
  const filteredData = data.filter((item) =>
    item.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  if (state.loading) {
    return (
      <div className="w-full flex justify-center items-center h-[90vh]">
        <MoonLoader color={"#123abc"} size={150} />
      </div>
    );
  }

  if (data.length < 1) {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <img src="https://i.ibb.co.com/PzWLFY6/7882958.webp" alt="No Movies" />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <input
        type="text"
        className="input-sm border rounded-md"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search any movie"
      />
      <div className="w-full grid gap-3 py-4 overflow-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((movie, index) => (
          <div className="rounded-md overflow-hidden relative flex flex-col hover:bg-red-400 shadow-md" key={index}>
            <div className="h-32 relative overflow-hidden rounded-md">
              <img
                src={movie.PosterUrl}
                className="self-center h-full w-full object-cover"
                alt="Poster Not Found"
              />
            </div>
            <div className="bg-black/60 p-3 relative w-full text-center flex flex-col grow">
              <h1 className="text-white shadow-lg text-xl">{movie.movieTitle}</h1>
              <div className="flex w-full justify-center flex-col !text-start items-start gap-2">
                <p className="text-white"> Genre: {movie.movieGenre}</p>
                <p className="text-white"> Rating: {movie.rating}/10</p>
                <p className="text-white"> Release: {movie.Release}</p>
                <p className="text-white">
                  Duration :{" "}
                  {Math.round(movie.duration / 60) > 60
                    ? Math.round(movie.duration / 3600) + " Day"
                    : Math.round(movie.duration / 60) + " Hour"}{" "}
                </p>
              </div>
              <button
                onClick={() => {
                  navigate("/auth/movieDetail", { state: movie._id });
                }}
                className="btn btn-sm text-black hover:text-white bg-primary"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
