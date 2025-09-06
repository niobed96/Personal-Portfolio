import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between px-20 pt-8 pb-12 font-Inter">
        <div>
          <Link to="/">
            <svg
              width="65"
              height="15"
              viewBox="0 0 82 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.34375 19.4688V6.92969C0.34375 5.24219 0.871094 3.85547 1.92578 2.76953C3.03516 1.63672 4.48047 1.07031 6.26172 1.07031C8.01953 1.07031 9.46484 1.63672 10.5977 2.76953C11.6523 3.81641 12.1797 5.20312 12.1797 6.92969V18.4141L9.95312 19.4688H9.83594V6.92969C9.83594 5.88281 9.55469 5.03516 8.99219 4.38672C8.29688 3.58203 7.38672 3.17969 6.26172 3.17969C5.13672 3.17969 4.22656 3.58203 3.53125 4.38672C2.96875 5.03516 2.6875 5.88281 2.6875 6.92969V18.4141L0.460938 19.4688H0.34375ZM16.8672 19.4688V1.89062L19.0938 0.835938H19.2109V18.4141L16.9844 19.4688H16.8672ZM26.2422 13.375C26.2422 14.4219 26.5234 15.2695 27.0859 15.918C27.7812 16.7227 28.6914 17.125 29.8164 17.125C30.9414 17.125 31.8516 16.7227 32.5469 15.918C33.1094 15.2695 33.3906 14.4219 33.3906 13.375V6.92969C33.3906 5.88281 33.1094 5.03516 32.5469 4.38672C31.8516 3.58203 30.9414 3.17969 29.8164 3.17969C28.6914 3.17969 27.7812 3.58203 27.0859 4.38672C26.5234 5.03516 26.2422 5.88281 26.2422 6.92969V13.375ZM23.8984 13.375V6.92969C23.8984 5.23438 24.4258 3.84766 25.4805 2.76953C26.5898 1.63672 28.0352 1.07031 29.8164 1.07031C31.5977 1.07031 33.043 1.63672 34.1523 2.76953C35.207 3.83984 35.7344 5.22656 35.7344 6.92969V13.375C35.7344 15.0703 35.207 16.457 34.1523 17.5352C33.043 18.668 31.5977 19.2344 29.8164 19.2344C28.0352 19.2344 26.5898 18.668 25.4805 17.5352C24.4258 16.457 23.8984 15.0703 23.8984 13.375ZM42.7656 16.8906H46.1055C47.2852 16.8906 48.2227 16.5195 48.918 15.7773C49.4258 15.2383 49.6797 14.5273 49.6797 13.6445C49.6797 12.7305 49.4102 11.9609 48.8711 11.3359C48.2852 10.6172 47.3633 10.2578 46.1055 10.2578H42.7656V16.8906ZM42.7656 8.14844H46.1055C46.8867 8.14844 47.5156 7.89453 47.9922 7.38672C48.4141 6.93359 48.625 6.34375 48.625 5.61719C48.625 5.02344 48.3711 4.48828 47.8633 4.01172C47.4102 3.61328 46.8242 3.41406 46.1055 3.41406H42.7656V8.14844ZM40.4219 19V1.89062L41.6641 1.30469H46.1055C47.4258 1.30469 48.5234 1.66406 49.3984 2.38281C50.4375 3.22656 50.957 4.30859 50.957 5.62891C50.957 6.97266 50.3633 8.08984 49.1758 8.98047C49.5586 9.14453 49.9375 9.39062 50.3125 9.71875C51.4531 10.7578 52.0234 12.0469 52.0234 13.5859C52.0234 15.1328 51.5234 16.4023 50.5234 17.3945C49.4531 18.4648 47.9805 19 46.1055 19H40.4219ZM56.4766 19V1.89062L57.7188 1.30469H65.1484V1.42188L64.1992 3.4375H58.8203V9.08594H65.1484V9.20312L64.1992 11.2188H58.8203V16.8672H67.1055V16.9844L66.1562 19H56.4766ZM70.0469 19V1.89062L71.2891 1.30469H75.7305C77.5117 1.30469 78.957 1.87109 80.0664 3.00391C81.1211 4.07422 81.6484 5.46094 81.6484 7.16406V13.1406C81.6484 14.8359 81.1211 16.2227 80.0664 17.3008C78.957 18.4336 77.5117 19 75.7305 19H70.0469ZM72.3906 16.8906H75.7305C76.8555 16.8906 77.7656 16.4883 78.4609 15.6836C79.0234 15.0352 79.3047 14.1875 79.3047 13.1406V7.16406C79.3047 6.11719 79.0234 5.26953 78.4609 4.62109C77.7656 3.81641 76.8555 3.41406 75.7305 3.41406H72.3906V16.8906Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <ul className="flex space-x-8 font-medium text-[0.95rem]">
          <li>
            <Link
              to="/"
              className="hover:text-black text-gray-800 hover:font-medium relative before:content-[''] before:block before:w-0 before:h-[3px]  before:absolute before:bottom-[-4px] before:left-0 before:transition-all before:duration-300 hover:before:w-full before:bg-purple-900"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="hover:text-black text-gray-800 hover:font-medium relative before:content-[''] before:block before:w-0 before:h-[3px]  before:absolute before:bottom-[-4px] before:left-0 before:transition-all before:duration-300 hover:before:w-full before:bg-purple-900"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Work"
              className="hover:text-black text-gray-800 hover:font-medium relative before:content-[''] before:block before:w-0 before:h-[3px] before:absolute before:bottom-[-4px] before:left-0 before:transition-all before:duration-300 hover:before:w-full before:bg-purple-900"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/Blog"
              className="hover:text-black text-gray-800 hover:font-medium relative before:content-[''] before:block before:w-0 before:h-[3px] before:absolute before:bottom-[-4px] before:left-0 before:transition-all before:duration-300 hover:before:w-full before:bg-purple-900"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div>
          <Link
            to="/contact"
            className="hover:bg-purple-90 hover:px-9 transition-all ease-in duration-300text-black bg-black px-8 py-3 rounded-full text-white font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
