import PropTypes from "prop-types";
import { YellowStarIcon } from "./Star";

export const Rating = ({ rating, size, fontSize = "16px" }) => {
  const ratingRoundoff = (rating) => {
    return Math.round(rating * 10) / 10;
  };

  const newRating = ratingRoundoff(rating);

  return (
    <div className="rating" style={{ fontSize: fontSize }}>
      <YellowStarIcon size={size} />
      {newRating}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  size: PropTypes.string,
  fontSize: PropTypes.string,
};
