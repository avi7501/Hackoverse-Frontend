import React, { useState } from "react";
import Logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      {/* Displays the below navigation for desktop devices */}
      <nav className="hidden z-50 lg:flex absolute top-0 w-full px-6 py-2">
        <div className="w-30 ">
          <a href="/">
            <img
              src=""
              className="lg:w-[80px] lg:h-[60px] w-[60px] h-[40px]"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex justify-end items-center w-[95%] ">
          <ul className="flex lg:text-lg  text-sm text-white flex-row lg:gap-6 gap-2 w-[50vw] justify-end">
            <li>
              <Link className="text-white  hover:text-red-700" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-black bg-white p-2 rounded-xl hover:bg-black/30  hover:text-white hover:border"
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Displays the below navigation for mobile devices */}
      <nav className="z-50 w-full shadow-xl pb-4 pt-2 bg-zinc-900 fixed block lg:hidden">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h2 className="text-2xl font-bold">
                  {" "}
                  <img src={Logo} className="w-[70px] h-[50px]" />
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="white"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center   justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li>
                  <Link
                    className="text-white hover:text-red-700"
                    to="/"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Home
                  </Link>
                </li>
        
                <li>
                  <Link
                    className="text-black w-full bg-white p-2 rounded-xl hover:bg-black/30  hover:text-white hover:border"
                    to="/register"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
