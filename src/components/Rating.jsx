import ReactStars from "react-rating-stars-component";

function Rating({ onChange }) {
  return (
    <ReactStars
      count={5}
      onChange={onChange}
      size={30}
      activeColor="#ffd700"
    />
  );
}

export default Rating;