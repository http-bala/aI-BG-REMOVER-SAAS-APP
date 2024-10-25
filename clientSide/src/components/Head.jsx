import React from "react";
import { assets } from "../assets/assets";

const Head = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 py-12">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
            Remove the <br className="max-md:hidden" />
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              background
            </span>
            from <br className="max-md:hidden" /> images with ease.
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            100% automatic and absolutely{" "}
            <span className="text-yellow-500 font-semibold">free</span> to use.
          </p>

          {/* Upload Box */}
          <div className="mt-8 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
            <input type="file" id="upload3" hidden />
            <label
              htmlFor="upload3"
              className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 py-10 rounded-lg cursor-pointer hover:border-blue-600 transition duration-300"
            >
              <p className="text-blue-600 font-semibold text-lg">
                Upload Image
              </p>
              <p className="text-gray-500 mt-2 text-sm">
                or drag & drop a file here
              </p>
            </label>
          </div>

          {/* Sample Images */}
          <div className="flex mt-6 justify-center lg:justify-start gap-4">
            <img
              className="w-12 h-12 rounded-full border object-cover"
              src={assets.sample1}
              alt="Sample 1"
            />
            <img
              className="w-12 h-12 rounded-full border object-cover"
              src={assets.sample2}
              alt="Sample 2"
            />
            <img
              className="w-12 h-12 rounded-full border object-cover"
              src={assets.sample3}
              alt="Sample 3"
            />
            <img
              className="w-12 h-12 rounded-full border object-cover"
              src={assets.sample4}
              alt="Sample 4"
            />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="w-full max-w-[300px] lg:max-w-[600px] lg:w-[600px] object-contain"
            src={assets.header_img}
            alt="Featured Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
