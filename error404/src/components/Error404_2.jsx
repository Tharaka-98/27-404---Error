import React from "react";
import err404 from "../assets/img/error-404.png";
import err404_2 from "../assets/img/error-404-2.avif";

const Error404_2 = () => {
  return (
    <div className="bg-green min-h-screen flex items-center justify-center">
      <div className="m-2 sm:m-8 bg-white rounded-lg p-6 sm:p-8">
        <h1 className="text-center text-3xl sm:text-6xl text-[#0033a0] font-bold sm:mt-2 ">
          Whoops!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 sm:p-4 sm:mt-4 mt-2">
          <div className="flex flex-col justify-center text-[#0033a0]">
            <h1 className="mt-2 text-xl sm:text-3xl md:text-5xl font-medium sm:-mt-8">
              404 Page Not Found!
            </h1>
            <h1 className="text-xl md:text-3xl font-medium text-[#ff2c99] sm:mt-2 hidden sm:block">
                This page got lost in conversation
            </h1>
            <h1 className="sm:mt-12 mt-4">
              It looks like that page doesn't exist - please check the URL and try again. <br />
              Okay!, Not to worry. You can head over to our{" "}
              <a href="#" className="hover:underline decoration-sky-500 font-semibold">
                homepage
              </a>
            </h1>
          </div>
          <div className="justify-items-center sm:justify-items-end">
            <img src={err404_2} alt={err404} className="w-full sm:h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404_2;
