import React,{useState} from "react";
import {
  HomeIcon,
  ChartBarIcon,
  CommandLineIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

import Logo from '../assets/logo.png'
export const Sidebar = () => {
  const type="learner"
  return (
    <>
    {type==="learner" && 
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white  dark:bg-black/20 backdrop-blur-3xl dark:border-gray-700">
      <a className="flex flex-row text-white hover:text-white text-2xl justify-start
       items-center gap-4" href="/">
      <img src={Logo} className="w-[30px] h-[30px]" /> <p>InSynk</p>
      </a>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex-1 -mx-3 space-y-3 ">
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/logged/dashboard/"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/logged/explore/"
          >
            <MagnifyingGlassIcon className="w-5 h-5"/>
            <span className="mx-2 text-sm font-medium">Explore</span>
          </a>
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/logged/compiler/"
          >
            <CommandLineIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Compiler</span>
          </a>
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/logged/events"
          >
            <CalendarIcon  className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Events</span>
          </a>

          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/logged/settings/"
          >
            <WrenchScrewdriverIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Settings</span>
          </a>
        </nav>
        <div className="mt-6">
          <div className="flex items-center justify-between mt-6">
            <a href="#" className="flex items-center gap-x-2">
              <img
                className="object-cover rounded-full h-7 w-7"
                src="data:image/jpeg;base64,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"
                alt="avatar"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {/* {user.name} */}
              </span>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>}
    {
      type==="organiser" &&
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white  dark:bg-black/20 backdrop-blur-3xl dark:border-gray-700">
      <a className="flex flex-row text-white hover:text-white text-2xl justify-start
       items-center gap-4" href="/">
      <img src={Logo} className="w-[30px] h-[30px]" /> <p>InSynk</p>
 
      </a>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex-1 -mx-3 space-y-3 ">
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Dashboard</span>
          </a>

          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <CalendarIcon  className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium"> My Events</span>
          </a>

          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <WrenchScrewdriverIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Settings</span>
          </a>
        </nav>
        <div className="mt-6">
     
          <div className="flex items-center justify-between mt-6">
            <a href="#" className="flex items-center gap-x-2">
              <img
                className="object-cover rounded-full h-7 w-7"
                src="data:image/jpeg;base64,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"
                alt="avatar"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {/* {user.name} */}
              </span>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
    }
    </>    
  );
};

export default Sidebar;
