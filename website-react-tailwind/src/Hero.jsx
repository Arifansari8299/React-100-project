import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6 md:px-24 md:py-20">
      {/* Text Section */}
      <div className="flex flex-col items-start space-y-6 md:space-y-8 w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mt-4 md:mt-0 leading-tight">
          HELLO
          <hr className="w-20 border-t-4 border-purple-600 my-3 mx-auto md:mx-0" />
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-purple-700 font-extrabold">
            I AM Arif Ansari
          </span>
        </h2>

        <p className="text-gray-700 text-lg md:text-xl">
          WEB DEVELOPER
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition duration-300 text-lg">
            HIRE ME
          </button>
          <button className="border border-purple-600 text-purple-600 py-3 px-8 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 text-lg">
            GET CV
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 mt-4 md:mb-0">
        <img
          src="home.png"
          alt="Arif Ansari"
          className="w-64 sm:w-72 md:w-96 lg:w-[500px] h-auto object-contain drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
