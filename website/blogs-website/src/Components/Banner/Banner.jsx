import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div>
      <div className="Banner-div">
        <div className="overlay">
          <h1 id="title">Welcome to our blogs</h1>
        </div>
        <img src="/media/Banner.jpg" width={"100%"} height={"750px"} style={{ObjectFit:'cover'}}/>
      </div>
    </div>
  );
}

export default Banner;
