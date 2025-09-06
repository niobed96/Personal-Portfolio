import React from "react";
import { Link } from "react-router-dom";

function BlogPost() {
  return (
    <>
      <div className="px-32">
        <Link to="/Blog" className="flex items-center">
          <img
            src="/public/Icon/arrow-left-svgrepo-com.svg"
            alt=""
            className="w-8 mr-3"
          />
          <button className="text-xl">Go Back</button>
        </Link>
        <div></div>
      </div>
    </>
  );
}

export default BlogPost;
