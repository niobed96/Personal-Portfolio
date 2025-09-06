import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "GlobeBites",
      description:
        "Globebites is a delightful recipe finder that takes you on a culinary journey around the world. This innovative platform serves up bite sized, easy to follow recipes inspired by global cuisines, making it simple for food lovers to discover and create delicious dishes.",
      image: "/public/Image/pexels-shvets-production-7191982.jpg",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "My Portfolio Website",
      description:
        "Globebites is a delightful recipe finder that takes you on a culinary journey around the world. This innovative platform serves up bite-sized, easy-to-follow recipes inspired by global cuisines, making it simple for food lovers to discover and create delicious dishes..",
      image: "/public/Image/pexels-ivan-samkov-9630217.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Handcraft online Market",
      description:
        "Globebites is a delightful recipe finder that takes you on a culinary journey around the world. This innovative platform serves up bite-sized, easy-to-follow recipes inspired by global cuisines, making it simple for food lovers to discover and create delicious dishes..",
      image: "/public/Image/pexels-tara-winstead-8386359.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
    },
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="font-Inter">
        <h1 className="pl-56 text-6xl mt-24">Hello I'm</h1>
        <h1 className="text-center text-9xl font-normal">
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 to-purple-800">
            Obed
          </span>{" "}
          Niyodusenga
        </h1>
        <h2 className="text-center mt-10 text-2xl font-medium">
          UI/UX Designer, Front-End Developer & Architectural drafter
        </h2>
        <p className="text-center mt-5 w-7/12 mx-auto text-xl text-gray-600">
          I&apos;m fueled by the intersection of creativity, technology, and
          design, transforming ideas into functional, elegant code and
          architectural concepts. I thrive on building web experiences that
          empower users, and translating visions into digital and structural
          realities.
        </p>
      </div>
      <div className="flex justify-center my-5">
        <Link to="/Work" className="flex">
          <button className="px-6 text-lg font-medium mt-10 py-2 rounded-full border-solid border-2 border-black mx-auto hover:bg-black hover:text-white">
            See My Work
          </button>
        </Link>
      </div>
      <div className="px-24 py-20 flex bg-gray-300 my-20  items-center">
        <div className="w-1/2">
          <h2 className="font-semibold text-6xl mb-10 relative before:content-[''] before:block before:w-0 before:h-[8px] before:absolute before:bottom-[-20px] before:left-0 before:transition-all before:duration-300 hover:before:w-1/3 before:bg-orange-600 before:rounded-full">
            What I do
          </h2>
          <p className="text-xl w-3/4">
            I craft fast, user-centric websites that balance form and function.
            From translating Figma designs into responsive React apps to
            finetuning animations and reducing load times, my focus is on
            creating seamless digital experiences that engage users and drive
            results.
          </p>
        </div>
        <div className="w-7/12 grid grid-cols-2 gap-10">
          <div className="bg-blue-400 p-10 rounded-3xl hover:shadow-xl hover:-translate-y-4 transition-all ease-in duration-200 hover:bg-blue-300">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#000000"
              >
                <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
              </svg>
              <h3 className="text-xl ml-4 font-medium">Web development</h3>
            </div>
            <p className="text-xl">
              Building fast, responsive websites with modern frameworks like
              React, HTML/CSS, and JavaScript.
            </p>
          </div>
          <div className="bg-blue-400 p-10 rounded-3xl hover:shadow-xl hover:-translate-y-4 transition-all ease-in duration-200 hover:bg-blue-300">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#000000"
              >
                <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
              </svg>
              <h3 className="text-xl ml-4 font-medium">UI/UX Design</h3>
            </div>
            <p className="text-xl">
              User-centered interfaces crafted in Figma or Adobe XD,wireframing,
              prototyping, and design systems.
            </p>
          </div>
          <div className="bg-blue-400 p-10 rounded-3xl hover:shadow-xl hover:translate-y-4 transition-all ease-in duration-200 hover:bg-blue-300">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#000000"
              >
                <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
              </svg>
              <h3 className="text-xl ml-4 font-medium">
                Architectural Drafting
              </h3>
            </div>
            <p className="text-xl">
              I am passionated about Building and creating aesthetic design give
              me a purpose
            </p>
          </div>
          <div className="bg-blue-400 p-10 rounded-3xl hover:shadow-xl hover:translate-y-4 transition-all ease-in duration-200 hover:bg-blue-300">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#000000"
              >
                <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
              </svg>
              <h3 className="text-xl ml-4 font-medium">SEO Optimization</h3>
            </div>
            <p className="text-xl">
              Performance tuning, updates, and bug fixes to keep your site or
              app running smoothly
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20 font-Inter px-28">
        <h2 className="text-center font-bold text-4xl mb-16">
          Featured Websites Project
        </h2>
        <div className="flex flex-col justify-center relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-400"
          >
            &#8592; {/* Left Arrow */}
          </button>
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-400"
          >
            &#8594; {/* Right Arrow */}
          </button>

          {/* Project Display */}
          <div className="w-9/12 flex p-5 bg-gray-300 rounded-3xl mx-auto mb-6">
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              className="w-2/5 bg-inherit h-hlv rounded-3xl mr-10"
            />
            <div>
              <h3 className="font-semibold text-xl mb-5">
                {projects[activeIndex].title}
              </h3>
              <p className="text-lg mb-4 h-48">
                {projects[activeIndex].description}
              </p>
              <ul className="flex space-x-5">
                {projects[activeIndex].technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-500 px-4 py-2 rounded-2xl hover:bg-gray-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dots for Navigation */}
          <div className="flex space-x-2 mx-auto">
            {projects.map((_, index) => (
              <span
                key={index}
                onClick={() => handleDotClick(index)}
                className={`cursor-pointer px-3 py-1 rounded-full ${
                  activeIndex === index ? "bg-gray-500" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
