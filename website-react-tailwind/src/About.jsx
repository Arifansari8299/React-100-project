import React from "react";

const Hero = () => {
  return (
    <section className="bg-white flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 md:px-32 lg:px-40 xl:px-52">
      {/* Text Section */}
      <div className="flex flex-col items-start space-y-8 w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-800 mt-4 md:mt-0">
          HELLO
          <hr className="w-24 border-t-4 border-purple-600 my-4 mx-auto md:mx-0" />
          <span className="block text-purple-700">I AM Arif Ansari</span>
        </h2>

        <p className="text-gray-600 text-xl md:text-2xl lg:text-3xl font-medium">
          A Passionate Web Developer
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <button className="bg-purple-700 text-white py-4 px-10 text-xl rounded-xl shadow-md hover:bg-purple-800 transition duration-300">
            HIRE ME
          </button>
          <button className="border-2 border-purple-700 text-purple-700 py-4 px-10 text-xl rounded-xl hover:bg-purple-700 hover:text-white transition duration-300">
            GET CV
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
        <img
          src="profile.jpg"
          alt="Arif Ansari"
          className="w-48 sm:w-72 md:w-[400px] lg:w-[460px] xl:w-[500px] h-auto object-cover rounded-2xl shadow-xl ring-4 ring-purple-200 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
