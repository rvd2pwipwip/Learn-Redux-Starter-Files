import React from "react";
import Photo from "./Photo";

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((p, i) => (
          <Photo key={i} i={i} {...this.props} post={p} />
        ))}
      </div>
    );
  }
});

export default PhotoGrid;
