import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const uEvents = [
  {
    id: 0,
    image:
      "https://storage.googleapis.com/cms-storage-bucket/70760bf1e88b184bb1bc.png",
    title: "Flutter ",
    date: "23-5-2023",
    time: "9:00am",
    venue: "SJEC",
    description: "Learn Flutter basics 101",
  },
  {
    id: 1,
    image:
      "https://repository-images.githubusercontent.com/536567619/a587b164-5843-4b14-a01d-fe87b3b8ef2d",
    title: "Compose Camp",
    date: "24-5-2023",
    time: "11:00am",
    venue: "Webinar Hall SJEC",
    description: "Learn Flutter basics 101",
  },
  {
    id: 2,
    image:
      "https://repository-images.githubusercontent.com/536567619/a587b164-5843-4b14-a01d-fe87b3b8ef2d",
    title: "Compose Camp",
    date: "24-5-2023",
    time: "11:00am",
    venue: "Webinar Hall SJEC",
    description: "Learn Flutter basics 101",
  },
];
const Dashboard = () => {
  const dp ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU";
  return (
    <>
      <div className="w-full overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-full gap-10 justify-center items-center p-10">
          <div className=" dark:bg-black/20 backdrop-blur-3xl flex text-2xl flex-col items-start justify-center rounded-lg p-10">
            <p className="text-4xl flex mb-3 mx-auto">Details</p>
            <p>Name :</p>
            <p>Email :</p>
            <p>Total Sessions Attended :</p>
            <p>Interests :</p>
          </div>
          <div className=" flex items-center justify-center">
            <img src={dp} className="rounded-full w-64 " alt="dp" />
          </div>
          <div className=" dark:bg-black/20 backdrop-blur-3xl flex flex-col items-center justify-center  rounded-lg p-10">
            <p className="text-4xl flex mb-3 mx-auto pb-2">Upcoming Events</p>
            <div className="w-full overflow-y-scroll h-48 flex flex-col gap-2">
              {uEvents.map((event) => (
                <div className="flex flex-row rounded-xl w-full bg-black/20 py-2 ">
                  <img
                    className="w-32 rounded-tl-xl  rounded-bl-xl "
                    src={event.image}
                  />
                  <div className="p-2 flex flex-col">
                    <p className="text-xl">{event.title}</p>
                    <div className="flex flex-row gap-3 text-sm">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <ClockIcon className="w-4" />
                        {event.time}
                      </div>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <CalendarDaysIcon className="w-4" />
                        {event.date}
                      </div>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <MapPinIcon className="w-4" />
                        {event.venue}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" dark:bg-black/20 backdrop-blur-3xl flex flex-col items-center justify-center rounded-lg p-10">
            <p className="text-4xl flex mb-3 mx-auto">Past Events</p>
            <div className="w-full overflow-y-scroll h-48 flex flex-col gap-2">
              {uEvents.map((event) => (
                <div className="flex flex-row rounded-xl w-full bg-black/20 py-2 ">
                  <img
                    className="w-32 rounded-tl-xl  rounded-bl-xl "
                    src={event.image}
                  />
                  <div className="p-2 flex flex-col">
                    <p className="text-xl">{event.title}</p>
                    <div className="flex flex-row gap-3 text-sm">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <ClockIcon className="w-4" />
                        {event.time}
                      </div>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <CalendarDaysIcon className="w-4" />
                        {event.date}
                      </div>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <MapPinIcon className="w-4" />
                        {event.venue}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
