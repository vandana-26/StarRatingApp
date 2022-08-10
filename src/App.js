import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h2>Star Rating App</h2>
      <StarRating />
    </div>
  );
}

const StarRating = () => {
  const [rating, setRating] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(0);
  return (
    <div className="starRating">
      {[...Array(5)].map((star, index) => {
        index = index + 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (rating || hoverValue) ? "on" : "off"}
            onClick={() => {
              setRating(index);
            }}
            onMouseEnter={() => {
              setHoverValue(index);
            }}
            onMouseLeave={() => {
              setHoverValue(rating);
            }}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
