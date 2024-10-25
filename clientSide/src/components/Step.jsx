import React from 'react';
import { assets } from '../assets/assets'; // Ensure to replace with actual icon paths

const steps = [
  {
    title: 'Upload Your Image',
    description: 'Click the upload button and select the image you want to edit.',
    icon: assets.upload_icon,
  },
  {
    title: 'Remove Background',
    description: 'The system will automatically remove the background in seconds.',
    icon: assets.remove_bg_icon,
  },
  {
    title: 'Download Your Image',
    description: 'Once the background is removed, you can download the image in high resolution.',
    icon: assets.download_icon,
  },
];

const Step = () => {
  return (
    <div className="mx-4 lg:mx-32 py-10">
      {/* Responsive Heading */}
      <div className="relative py-10">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
           Steps to <span className="text-teal-500">Remove Background</span> from <span className="text-teal-500">Images</span> 
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-600 mb-8">
          Experience a hassle-free way to enhance your images!
        </p>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-300 to-purple-500 opacity-30 animate-pulse"></div>
        </div>
      </div>

      {/* Responsive Steps */}
      <div className="flex flex-col md:flex-row md:justify-center md:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start bg-white border rounded-lg shadow-md p-6 mb-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg w-full max-w-xs md:max-w-md"
          >
            <img className="w-12 h-12 mr-4" src={step.icon} alt={step.title} />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step;
