import React from 'react'
import SearchBar from '../components/SearchBar'
const Data = [
  {
      id: 0,
      title: "Web",
      image:"https://img.freepik.com/premium-vector/web-development-concept-3d-isometric-design-designer-works-with-code-interface-engineering_9209-7794.jpg?w=2000",
      link: "#",
  },
  {
    id: 1,
    title: "Android",
    image:"https://goobar.b-cdn.net/wp-content/uploads/2021/03/android_category_thumbnail.png",
    link: "#",
},
{
  id:2,
  title: "IOS",
  image:"https://cdn.mindmajix.com/courses/ios-training.png",
  link: "#",
},
{
  id:3,
  title: "AI/ML",
  image:"data:image/jpeg;base64,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",
  link: "#",
},
  
];
const Explore = () => {
  return (
    <div className='w-full mx-auto overflow-y-scroll'>
        <SearchBar/>
        <p className='flex justify-center text-4xl p-10'>Categories</p>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
      {Data.map((item) => (
        <div
          key={item.id}
          className="hiddena mb-4 flex flex-col h-80 items-center text-center lg:col-span-1 lg:items-start lg:text-left"
        >
          <div
            className="flex h-full w-full flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full rounded-[10px] z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <div className="absolute w-full items-center text-center justify-center bottom-4">
              <h1 className="text-2xl font-poppins text-white font-semibold">
                {item.title}
              </h1>
              <p>{item.Designation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Explore