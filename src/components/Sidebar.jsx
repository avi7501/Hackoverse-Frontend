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
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

import Logo from '../assets/logo.png'
export const Sidebar = () => {
  const type="organiser"
  return (
    <>
    {type==="learner" && 
    <aside className="flex flex-col w-64 h-full px-5 py-8 overflow-y-auto bg-black/20 backdrop-blur-3xl border-gray-700">
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
            href="/logged/certificate"
          >
            <AcademicCapIcon  className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Certificate</span>
          </a>

          {/* <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/logged/settings/"
          >
            <WrenchScrewdriverIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Settings</span>
          </a> */}
        </nav>
        <div className="mt-6">
          <div className="flex items-center justify-between mt-6">
            <a href="#" className="flex items-center gap-x-2">
              <img
                className="object-cover rounded-full h-7 w-7"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU"
                alt="avatar"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {/* {user.name} */} User
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
            href="/logged/dashboard/"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Dashboard</span>
          </a>

          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/logged/createevents/"
          >
            <CalendarIcon  className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium"> Create Events</span>
          </a>
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/logged/certificate"
          >
            <AcademicCapIcon  className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Certificate</span>
          </a>
{/* 
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <WrenchScrewdriverIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Settings</span>
          </a> */}
        </nav>
        <div className="mt-6">
     
          <div className="flex items-center justify-between mt-6">
            <a href="#" className="flex items-center gap-x-2">
              <img
                className="object-cover rounded-full h-7 w-7"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU"
                alt="avatar"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {/* {user.name} */}User
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
