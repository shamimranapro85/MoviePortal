import React from "react";
import { Rating } from "react-simple-star-rating";
import { useForm } from "react-hook-form";
import { Flip, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";
import { UpdateMovieData } from "../../../redux/slice/UpdateData";
import { useLocation, useNavigate } from "react-router-dom";
export default function UpdateMovie() {
  const navigate = useNavigate()
  const location = useLocation();
  console.log(location);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const state = useSelector((state) => state.addMovies);
  const stateUser = useSelector((state) => state.normalState);
  const updatState = useSelector((state) => state.updateMovie);

  const dispatch = useDispatch();

  const onSubmitted = async (data) => {
    try {
      console.clear();

      const fynalDAta = { ...data, email: stateUser.user.email };

      const responsed = await dispatch(
        UpdateMovieData({ id: location.state, data: fynalDAta })
      );
      navigate("/allmovies")
      toast.success("successfully Update movie you can see all movie page", {
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
    } catch (error) {
      console.log(error);
    }
  };

  const year = [
    1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961,
    1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
    1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985,
    1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
    1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023, 2024,
  ];
  return (
    <>
      <div className="w-full flex h-[90vh] justify-center flex-col items-center">
        <h1 className="text-5xl text-center">Update now movie</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmitted)} className="card-body">
            <div className="grid grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Moive Title</span>
                </label>
                <input
                  {...register("movieTitle", {
                    required: true,
                    minLength: 3,
                  })}
                  name="movieTitle"
                  className="text-sm input input-bordered"
                  type="text"
                  placeholder="Enter the Name"
                />

                {errors.movieTitle && (
                  <span className="text-red-500 pt-2 pl-2">
                    Minimum 2 character
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Moive Poster</span>
                </label>
                <input
                  name="PosterUrl"
                  className="text-sm input input-bordered"
                  {...register("PosterUrl", {
                    required: true,
                    pattern:
                      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/,
                  })}
                  type="text"
                  // onChange={onchangePhotoLInk}
                  placeholder="Enter the Url"
                />
                {errors.PosterUrl && (
                  <span className="text-red-500 pt-2 pl-2">Must be a Url</span>
                )}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select
                  {...register("movieGenre")}
                  className="text-sm select select-bordered"
                >
                  <option value="" disabled selected>
                    Choice Genre
                  </option>
                  <option value="comedy">comedy</option>
                  <option value="drama">Drama</option>
                  <option value="horror">horror</option>
                  <option value="Actional">Actional</option>
                  <option value="Romantic">Romantic</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Moive Duration</span>
                </label>
                <input
                  {...register("duration", {
                    required: true,
                    min: { value: 60 },
                  })}
                  name="duration"
                  className="text-sm input input-bordered"
                  type="number"
                  placeholder="Enter the Duration"
                />
                {errors.duration && (
                  <span className="text-red-500 pt-2 pl-2">
                    At lest 60 minute
                  </span>
                )}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Release Year</span>
                </label>
                <select
                  {...register("Release", {
                    required: true,
                  })}
                  defaultValue=""
                  // name="movieGenre"
                  className="text-sm select select-bordered"
                >
                  <option value="" disabled selected>
                    Choice Release Year
                  </option>
                  {year.map((years) => (
                    <option value={years}>{years}</option>
                  ))}
                </select>
                {errors.movieGenre && (
                  <span className="text-red-500 pt-2 pl-2">Must be select</span>
                )}
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <div className="custom-rating-container  grow flex flex-col items-center ">
                  <Rating
                    onClick={(value) => setValue("rating", value * 2)}
                    className=""
                    {...register("rating", {
                      required: true,
                    })}
                    size={20}
                  />
                  {errors.rating && (
                    <span className="text-red-500 pt-2 pl-2">
                      Must be select
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Summary</span>
              </label>
              <textarea
                {...register("summary", {
                  required: true,
                  minLength: 10,
                })}
                className="text-sm textarea input-bordered"
                type="text"
                placeholder="Type at lest 10 character"
              />
              {errors.summary && (
                <span className="text-red-500 pt-2 pl-2">
                  At least 10 character
                </span>
              )}
            </div>
            <button className="btn bg-green-500 btn-sm text-white">
              {state.loading && <MoonLoader size={15}></MoonLoader>} Add movie
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
