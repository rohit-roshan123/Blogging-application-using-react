import "./DedicatedBlog.css";
import Banner from "../../Components/Banner/Banner";
import { useState, useEffect } from "react";
import blogs from "../../Utils/MockData";
import { useParams } from "react-router-dom";

import React from "react";

function DedicatedBlog() {
  const [blogID, setblogID] = useState(1);
  let blogToDisplay = blogs.filter((blog) => blog.id == blogID)[0];

  const {id} = useParams();
  useEffect(() => {
    if(id) {
      setblogID(id);
    }
  }, []);
  return (
    <div>
      <Banner />
      <h1>{blogToDisplay.title}</h1>
      <h6>{blogToDisplay.category}</h6>
      <p>{blogToDisplay.content}</p>
    </div>
  );
}

export default DedicatedBlog;
