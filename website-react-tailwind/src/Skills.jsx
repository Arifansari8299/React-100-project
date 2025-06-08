import React from "react";

const Skills = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold">SKILLS</h2>
      </div>

      <section className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Skills Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind",
            "Reactjs", "Angular", "Expressjs", "Nodejs",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-sm h-24 flex justify-center items-center text-gray-800 font-semibold text-lg rounded-lg hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Experience Box */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-8 rounded-lg shadow-md text-center lg:text-left">
            <div className="border-dashed border-2 border-gray-300 p-6 mb-4">
              <span className="text-purple-600 text-5xl sm:text-6xl font-bold">1+</span>
            </div>
            <div className="text-gray-700 text-lg font-medium">
              Years Experience <br />
              Working
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
