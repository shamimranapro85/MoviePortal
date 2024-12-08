import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MoonLoader from "react-spinners/MoonLoader";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { feturedMovie } from "../../../redux/slice/FeturedMovie";

export default function CardSlider() {
  const FeturedMOvies = useSelector((state) => state.FeturedMovie);
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(feturedMovie())
  },[])
  if (FeturedMOvies?.data.length < 1) {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <img src="https://i.ibb.co.com/PzWLFY6/7882958.webp" alt="" />
      </div>
    );
  }

  console.log("i am data slider",FeturedMOvies);
  
  return (
    <div className="h-96">
      {FeturedMOvies.loading ? (
        <div className="flex justify-center items-start">
          <MoonLoader size={20} />
        </div>
      ) : (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper "
          >
          
            {FeturedMOvies.data
              .slice(0, 3)
              .map((value) => {
                return (
                  <SwiperSlide>
                    <img src={value.PosterUrl} alt="" />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </>
      )}
    </div>
  );
}
