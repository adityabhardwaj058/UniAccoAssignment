import "./MovieCard.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Rating } from "../ratingComponent/Rating";
import "../ratingComponent/Rating.css";

export const MovieCard = ({ movie }) => {
  const [display, setDisplay] = useState("none");

  const modalStyle = {
    display: display,
  };

  const openModal = () => {
    setDisplay("flex");
  };

  const closeModal = () => {
    setDisplay("none");
  };

  const getReleaseYear = (string) => {
    const date = new Date(string);
    const year = date.getFullYear();
    return year;
  };

  const releaseYear = getReleaseYear(movie.release_date);

  return (
    <>
      <div className="movieCard" onClick={openModal}>
        <img
          className="poster"
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <div className="details">
          <div className="titleContainer">
            <div className="title">{movie.title}</div>
            <Rating
              rating={movie.vote_average}
              size={"12px"}
              fontSize={"12px"}
            />
          </div>
        </div>
      </div>
      <div className="movieCardModal" style={modalStyle} onClick={closeModal}>
        <div className="description" onClick={(e) => e.stopPropagation()}>
          <img
            className="modalPoster"
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <div className="modalDetails">
            <h2 style={{ margin: "0" }}>
              {movie.title + "   " + `(${releaseYear})`}
            </h2>
            <div className="modalDescription">{movie.overview}</div>
            <div className="crums">
              <Rating rating={movie.vote_average} />
              <span className="with-vertical-line"></span>
              <div>{movie.original_language.toUpperCase()}</div>
              <span className="with-vertical-line"></span>
              <div>{movie.adult === false ? "PG-13" : "R-Rated"}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
