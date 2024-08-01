// src/YellowStarIcon.js
import StarIcon from "@mui/icons-material/Star";
import propTypes from "prop-types";

export const YellowStarIcon = ({ size = "16px" }) => {
  return <StarIcon style={{ color: "yellow", fontSize: size }} />;
};

YellowStarIcon.propTypes = {
  size: propTypes.string,
};
