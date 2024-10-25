import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Stay Connected</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="mt-4 flex justify-center md:justify-start">
              <input
                type="email"
                className="w-64 px-4 py-2 text-neutral-800 rounded-l-md focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 text-neutral-50 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-sm">
              Developed by <a href="https://balakrishna.site" className="text-fuchsia-500 font-medium">Balakrishna Kolla</a>
            </p>
            <p className="text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-neutral-700 pt-8 text-center text-neutral-500">
          <p>
            <span className="hover:text-fuchsia-400">Privacy Policy</span> | <span className="hover:text-fuchsia-400">Terms of Service</span> | <span className="hover:text-fuchsia-400">Contact Us</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
