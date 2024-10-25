import React from "react";

const Upload =( )=> {
    return (
        <div className="pb-16 flex items-center flex-col">
            {/* Title  */}
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold">See the magic. Try now</h1>
                      {/* Upload Box */}
          <div className="mt-8 p-6 bg-white shadow-lg w-[40%] rounded-xl border border-gray-200">
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
        </div>
    )
}

export default Upload;