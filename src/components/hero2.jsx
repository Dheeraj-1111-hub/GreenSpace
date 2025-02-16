import React from "react";
import eco from "../assets/eco.png";
import psychology from "../assets/psychology.png";
import support from "../assets/support.avif";

const Hero2 = () => {
  return (
    <div>
      <main className="py-10 px-4 sm:py-20 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-50 rounded-3xl p-6 sm:p-16 relative overflow-hidden flex flex-col-reverse sm:flex-row">
            
            <div className="w-full sm:w-1/2 sm:pr-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left">
                Why Choose GreenSpace?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <img src={eco} className="w-10 h-8" />
                  <div>
                    <h4 className="font-bold mb-2 text-lg sm:text-xl">
                      Sustainable Solutions
                    </h4>
                    <p className="text-gray-600">
                      Our designs prioritize environmental sustainability while
                      creating beautiful spaces.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img src={psychology} className="w-10 h-8" />
                  <div>
                    <h4 className="font-bold mb-2 text-lg sm:text-xl">
                      Expert Design
                    </h4>
                    <p className="text-gray-600">
                      Our team of experienced designers creates personalized
                      solutions for your space.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img src={support} className="w-10 h-8" />
                  <div>
                    <h4 className="font-bold mb-2 text-lg sm:text-xl">
                      Ongoing Support
                    </h4>
                    <p className="text-gray-600">
                      We provide continuous maintenance and support to ensure
                      your green space thrives.
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-transform hover:scale-105 block mx-auto sm:mx-0">
                Get Started Today
              </button>
            </div>

            <div className="w-full sm:w-1/2 h-64 sm:h-auto">
              <img
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
                alt="Green office space"
                className="w-full h-full object-cover rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero2;
