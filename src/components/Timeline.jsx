"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (<div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 md:flex md:flex-col md:items-center md:justify-center hidden"
      ref={containerRef}>
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold">
          How It Works?
        </h2>
        <p
          className="text-neutral-700 dark:text-neutral-300 text-md md:text-base max-w-full ">
          Transform your space into a green paradise with our easy-to-use process
        </p>
      </div>
      <div ref={ref} className="relative max-w-11xl mx-auto pb-40 flex flex-col items-center justify-center">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col z-40 items-center top-40 self-start justify-center sm:justify-start max-w-xs lg:max-w-lg md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 sm:pl-10 ">
                {item.title}
              </h3>
              <h5
                className="text-xl md:pl-20 md:text-xl font-bold text-neutral-500 dark:text-neutral-500 pt-4">
                {item.description}
              </h5>
            </div>

            <div className="flex items-center justify-end relative ml-40 pr-4 md:pl-4 w-full">
              <img src={item.logos} className="w-40 h-40 rounded-full hidden sm:block"/>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-green-500 via-green-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>)
  );
};
export default Timeline;