import React from "react";
import { Rating } from "react-simple-star-rating";

function StarFilter({ onChange }) {
  return (
    <div>
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
