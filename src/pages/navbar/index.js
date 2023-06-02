import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-20 w-20"
                style={{ height: "20px", width: "auto" }}
                src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg"
                alt="Logo"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-black-300 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="/"
                className="text-black-300 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="/"
                className="text-black-300 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="/"
                className="text-black-300 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-grey-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-black-300 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/"
              className="text-black-300 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/"
              className="text-black-300 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="/"
              className="text-black-300 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
