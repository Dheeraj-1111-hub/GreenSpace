import React from 'react'
import plant from '../assets/earth.webp'
const Schedule = () => {
  return (
    <div className='w-full p-20'>
      <div className="bg-green-600 text-white rounded-3xl p-16 relative overflow-hidden">
                <div className=" flex flex-col items-start justify-center max-w-2xl relative z-10">
                    <h2 className="text-4xl font-bold mb-6 text-wrap">Ready to Transform Your Space?</h2>
                    <p className="mb-8 text-white/90 ">
                        Let's work together to create your own before and after success story.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-50 hover:cursor-pointer font-semibold transition-colors hover:scale-105">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 sm:opacity-10 md:opacity-30 lg:opacity-50">
                    <span className="absolute top-1/2 right-8 -translate-y-1/2">
                        <img src={plant} />
                    </span>
                </div>
            </div>
    </div>
  )
}

export default Schedule
