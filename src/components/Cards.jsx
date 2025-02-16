import React from 'react'
import arrow from '../assets/arrow.png'
const Cards = (props) => {
  return (
    <div className="p-20">
        <div className="grid lg:grid-cols-1 md:grid-cols-1  gap-4 mb-10">
            <div className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow group w-full h-120">
                <span className="material-symbols-outlined text-xl text-green-600 mb-4 group-hover:scale-110 transition-transform ">
                    <img src={props.img} className='rounded-lg border-2 border-black'/>
                </span>
                <h2 className="text-3xl font-bold mb-4">{props.title}</h2>
                <p className="text-gray-600 mb-6 font-medium">
                    {props.desc}
                </p>
                <button className="rounded-lg bg-black px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-green-700 hover:cursor-pointer active:scale-90">
                <a href="#"className="inline-flex items-center font-medium">Learn More
                <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">
                    <img src={arrow} className='w-8 h-8 pt-1'/>
                </span>
                </a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cards
