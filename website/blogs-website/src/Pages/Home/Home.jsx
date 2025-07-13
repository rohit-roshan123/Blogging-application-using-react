import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import TrendingBlog from "../../Components/TrendingBlog/TrendingBlog";
import blogs from "../../Utils/MockData";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Banner />
      <div className="my-2">
        <h1>Read Blogs from</h1>

        <div className="d-flex justify-content-evenly">
          <Link to={"/Blogs/Programming"}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/media/programming.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Programming</h5>
              </div>
            </div>
          </Link>

          <Link to={"/Blogs/Cooking"}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/media/cooking.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Cooking</h5>
              </div>
            </div>
          </Link>

          <Link to={"/Blogs/Workouts"}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/media/Fitness.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Workout</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="trending-blogs-section">
        <h1>Trending Blogs</h1>

        <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
          {blogs.map((blog) => (
            <TrendingBlog blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
