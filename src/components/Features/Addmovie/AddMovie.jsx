import React from "react";
import { RatingCount } from "./Rating";
import { Rating } from "react-simple-star-rating";
import { useForm } from "react-hook-form";
import { Flip, toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addmovie } from "../../../redux/slice/addMovie";
import MoonLoader from "react-spinners/MoonLoader";
export default function AddMovie() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const state = useSelector((state) => state.addMovies);
  const stateUser = useSelector((state) => state.normalState);
  const dispatch = useDispatch();

  const onSubmitted = async (data) => {
    try {
      console.clear();

      const fynalDAta = { ...data, email: stateUser.user.email };

      const responsed = await dispatch(addmovie(fynalDAta));
      console.log(responsed);

      toast.success("successfully added", {
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
  return (
    <>
      <div className="w-full flex h-[90vh] justify-center flex-col items-center">
        <h1 className="text-5xl">Add now movie</h1>
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
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
                {errors.movieGenre && (
                  <span className="text-red-500 pt-2 pl-2">Must be select</span>
                )}
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Release Year</span>
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
