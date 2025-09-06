import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Blog() {
  return (
    <>
      <div className="px-32">
        <h1 className="text-3xl font-bold text-blue-900 mb-10 ">BLOG</h1>
        <p className="w-1/2 text-xl">
          A curated archive of insights, mistakes, and discoveries. Less fluff,
          more actionable takeaways for anyone who value depth over noise.
        </p>
        <div className="mt-12">
          <ul className="flex space-x-7 text-lg">
            <li>
              <NavLink
                to="/Blog"
                end
                className={({ isActive }) =>
                  `relative hover:text-blue-900 ${
                    isActive
                      ? "text-blue-900 font-bold before:w-full"
                      : "text-gray-800 before:w-0"
                  } before:content-[''] before:block before:h-[3px] before:bg-blue-900 before:absolute before:bottom-[-4px] before:left-0 before:transition-all before:duration-300`
                }
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blog/Featured"
                className={({ isActive }) =>
                  `relative hover:text-blue-900 ${
                    isActive
                      ? "text-blue-900 font-bold before:w-full"
                      : "text-gray-800 before:w-0"
                  } before:content-[''] before:block before:h-[3px] before:bg-blue-900 before:absolute before:bottom-[-4px] before:left-0 before:transition-all before:duration-300`
                }
              >
                Featured
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blog/Thoughts"
                className={({ isActive }) =>
                  `relative hover:text-blue-900 ${
                    isActive
                      ? "text-blue-900 font-bold before:w-full"
                      : "text-gray-800 before:w-0"
                  } before:content-[''] before:block before:h-[3px] before:bg-blue-900 before:absolute before:bottom-[-4px] before:left-0 before:transition-all before:duration-300`
                }
              >
                Thoughts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blog/News"
                className={({ isActive }) =>
                  `relative hover:text-blue-900 ${
                    isActive
                      ? "text-blue-900 font-bold before:w-full"
                      : "text-gray-800 before:w-0"
                  } before:content-[''] before:block before:h-[3px] before:bg-blue-900 before:absolute before:bottom-[-4px] before:left-0 before:transition-all before:duration-300`
                }
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blog/Tips"
                className={({ isActive }) =>
                  `relative hover:text-blue-900 ${
                    isActive
                      ? "text-blue-900 font-bold before:w-full"
                      : "text-gray-800 before:w-0"
                  } before:content-[''] before:block before:h-[3px] before:bg-blue-900 before:absolute before:bottom-[-4px] before:left-0 before:transition-all before:duration-300`
                }
              >
                Tools & Tips
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Blog;
