import React from "react";
import moonImg from "../assets/moon.png"; // Make sure this image exists in src/assets

const GreetingCard = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-900 to-black dark:from-black dark:to-gray-900  overflow-hidden text-white">
      {/* 🌙 Stars and Moon Layer */}
      <div className="absolute inset-0 z-0">
        <div className="animate-stars w-full h-full bg-black opacity-20"></div>
        <img
          src={moonImg}
          alt="Moon"
          className="absolute top-10 right-10 w-28 animate-pulse"
        />
      </div>

      {/* 🎉 Eid Message */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-eidGold font-arabic mb-4">
          Eid Mubarak 🌙
        </h1>
        <p className="text-lg max-w-2xl text-gray-200 dark:text-gray-300">
          May Allah fill your life with joy, sacrifice, and love this Eid!
        </p>
      </div>
    </div>
  );
};

export default GreetingCard;
