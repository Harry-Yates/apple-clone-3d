// import React from "react";
import { hightlightsSlides } from "../constants/index";

function VideoCarousel() {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div
            key={list.id}
            id="slider"
            className="sm:pr-20 pr-10">
            <div className="video-carousel_container">TEST</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default VideoCarousel;