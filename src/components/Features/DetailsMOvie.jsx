import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { moviedetailsbyid } from "../../redux/slice/DetailsMovieById";

export default function DetailsMOvie() {
  const { state: id } = useLocation();
  const dispatch = useDispatch();
  const detailsState = useSelector((state) => state.movieDetailByID);

  useEffect(() => {
    dispatch(moviedetailsbyid(id));
  }, []);
  
  console.log(detailsState);

  return <div>dtail movie page</div>;
}
