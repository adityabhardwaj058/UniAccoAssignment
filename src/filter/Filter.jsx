import "./Filter.css";
import PropTypes from "prop-types";

export const Filter = ({ value, onChange }) => {
  return (
    <div className="filter">
      <input
        className="filterInput"
        type="text"
        placeholder="Search movies..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
