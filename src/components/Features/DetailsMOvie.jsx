import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { moviedetailsbyid } from "../../redux/slice/DetailsMovieById";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";
import { Flip, toast } from "react-toastify";
import { addFavMovie } from "../../redux/slice/addFavMovie";
export default function DetailsMOvie() {
  const navigate = useNavigate();
  const { state: id } = useLocation();
  const dispatch = useDispatch();
  const detailsState = useSelector((state) => state.movieDetailByID);
  const addFAvState = useSelector((state) => state.addfavmovoie);
  const userState = useSelector((state) => state.normalState);

  useEffect(() => {
    dispatch(moviedetailsbyid(id));
  }, []);

  const addFAveMOvieONclick = async () => {
    try {
      const { _id, ...fynalDAta } = detailsState.data.data;
      await dispatch(
        addFavMovie({ ...fynalDAta, email: userState.user.email })
      );
      toast.success("Favorit movie add successfully", {
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
      toast.warning("not add user in fav", {
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
    }
  };

  console.log("iam datastate", detailsState.data.data);

  const DeleteMOvie = async () => {
    try {
      const responsed = await axios.delete(
        `https://orchid-server-xi.vercel.app/deletewithId/${id}`
      );
      navigate("/allmovies");
      toast.success("successfully delete the movie", {
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
      toast.warning("some error not delete the movie", {
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
      console.log(error);
    }
  };

  return (
    <div>
      {detailsState.loading ? (
        <div className="flex justify-center items-center">
          <MoonLoader />
        </div>
      ) : (
        <>
          <div className="w-full flex justify-center items-center">
            <div className="flex rounded-md border shadow-md p-3 flex-col gap-2">
              <div className="h-64 flex justify-center rounded-md items-center overflow-hidden relative">
                <img
                  src={detailsState.data.data.PosterUrl}
                  className="self-center object-cover"
                  alt="Poster not found"
                />
              </div>
              <h1 className="capitalize">
                {" "}
                Name : {detailsState.data.data.movieTitle}
              </h1>
              <h1>Genre : {detailsState.data.data.movieGenre}</h1>
              <h1>Release Year : {detailsState.data.data.Release}</h1>
              <h1>Rating : {detailsState.data.data.rating}/10</h1>
              <h1>
                Duration :
                {Math.round(detailsState.data.data.duration / 60) > 60
                  ? Math.round(detailsState.data.data.duration / 3600) + " Day"
                  : Math.round(detailsState.data.data.duration / 60) +
                    " Hour"}{" "}
              </h1>
              <h1>Summary : {detailsState.data.data.summary}</h1>
              <div className="grid gap-2 grid-cols-3">
                <button className="btn bg-red-500" onClick={DeleteMOvie}>
                  Delate Movie
                </button>
                <button className="btn " onClick={addFAveMOvieONclick}>
                  {addFAvState.loading && <MoonLoader size={15} />}Add favoirit
                </button>
                <button
                  onClick={() => {
                    navigate("/auth/Update", {
                      state: detailsState.data.data._id,
                    });
                  }}
                  className="btn bg-green-500"
                >
                  Update Movie
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
