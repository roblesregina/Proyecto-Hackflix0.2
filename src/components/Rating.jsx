import React from "react";
import { Rating } from "react-simple-star-rating";

function StarFilter({ onChange }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Rating
        onClick={onChange}
        size={30}
        allowFraction={false}
        fillColor="#ffd700"
        emptyColor="#444"
      />
    </div>
  );
}

export default StarFilter;
