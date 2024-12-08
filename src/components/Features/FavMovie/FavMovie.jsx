import { useDispatch, useSelector } from "react-redux";
import { getFAvMovie } from "../../../redux/slice/getFAvMovie";
import { useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { deleteFavmovie } from "../../../redux/slice/deleteFAvmovie";

export default function FavMovie() {
  const favMovie = useSelector((state) => state.getfavmovie);
  const userSate = useSelector((state) => state.normalState);
  const deletestate = useSelector((state) => state.deleteFAvemovie);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getFAvMovie(userSate.user.email));
    })();
  }, [deletestate]);

  if (favMovie.data?.length < 1) {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <img src="https://i.ibb.co.com/PzWLFY6/7882958.webp" alt="" />
      </div>
    );
  }
  console.log("checking support:",favMovie);


  return (
    <div>
      {favMovie.loading ? (
        <div className="flex justify-center items-center">
          <MoonLoader size={25}></MoonLoader>
        </div>
      ) : (
        <>
          <div className="w-full grid gap-3 py-4 overflow-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {favMovie.data.map((movie, index) => {
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
                       dispatch(deleteFavmovie(movie._id))
                       toast.success("Delete Favorit item successfully", {
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
                      }}
                      className="btn btn-sm text-black bg-red-500 hover:text-white"
                    >
                      Delete Favorit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
