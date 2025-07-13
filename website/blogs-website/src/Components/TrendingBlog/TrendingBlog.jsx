import React from "react";

function TrendingBlog({ blog }) {

    let image='';

    switch(blog.category){
        case "Travelling":
            image='Travelling.jpg';
            break;
        case "Cooking":
            image='cooking.jpg';
            break;
        case "Programming":
            image='programming.jpg';
            break;
        case "Workouts":
            image='Fitness.jpg';
            break;
        case "Health":
            image='Health.jpg';
            break;
    }


  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={`/media/${image}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text text-muted">{blog.category}</p>
          <p className="card-text">{blog.previewDescription}.</p>
        </div>
      </div>
    </div>
  );
}

export default TrendingBlog;
