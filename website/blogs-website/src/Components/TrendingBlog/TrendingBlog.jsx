import React from "react";

function TrendingBlog({blog}) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="/media/programming.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Programming</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrendingBlog;
