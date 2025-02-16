import React from 'react';
import plant3 from '../assets/plant3.jpg';
const Hero = () => {
  return (
    <>
    
    <div className="relative w-full min-h-[100vh] flex items-center justify-center">
      <div className="absolute w-full min-h-[100vh] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${plant3})` }} 
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-4xl font-bold text-white ">
          Optimize Your Green Space
        </h1>
        <p className="mt-4 text-lg text-white sm:text-xl max-w-2xl mx-auto">
          Transform any space into a thriving garden with our innovative solutions for sustainable urban living.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-green-700 hover:cursor-pointer active:scale-90">
            Start Planning
          </button>
          <button className="rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-black hover:cursor-pointer active:scale-90">
            Learn More
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;

