import React from 'react';

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-8">
      <div className="relative max-h-[500px] rounded-2xl overflow-hidden shadow-lg">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center px-6">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fadeInUp">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fadeInUp delay-100">
            <span className="text-orange-500">Foods</span> Delivered
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mt-4 max-w-md animate-fadeInUp delay-200">
            Experience fast delivery, mouth-watering taste, and a feast for your eyes – all in one bite.
          </p>
        </div>
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Delicious food"
        />
      </div>
    </div>
  );
};

export default Hero;
