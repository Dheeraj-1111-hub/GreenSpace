import React from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import before from '../assets/before1.png'
import after from '../assets/after1.png'
export const BeforeAfter = () => {
  return (
    <div className="flex justify-center items-center w-full h-auto p-10">
      <div className="w-[70%] max-w-4xl h-auto rounded-4xl">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={before}
              alt="Before"
              className="rounded-2xl"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={after}
              alt="After"
              className="rounded-2xl"
            />
          }
        />
      </div>
    </div>
  );
};

export default BeforeAfter;
