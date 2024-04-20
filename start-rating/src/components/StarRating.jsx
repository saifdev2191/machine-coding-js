import { useState } from "react";

const StarRating = (props) => {
  const {
    noOfStar = 5,
    startEl = <>&#9734;</>,
    onHoverClr = "yellow",
    onSelectClr = "gold",
    onSelect = () => {},
  } = props;

  const [actionType, setActionType] = useState("");
  const [currentStarId, setCurrentStarId] = useState();

  const handleHoverOnStar = (e) => {
    const id = e.target.id;
    setActionType("hover");
    setCurrentStarId(id);
  };

  const handleSelect = (e) => {
    setActionType("active");
    onSelect(e.target.id);
  };

  const handleOnMouseLeave = () => {
    if (actionType !== "active") {
      setActionType("");
    }
  };

  const getStarColor = (i) => {
    if (i <= currentStarId) {
      switch (actionType) {
        case "hover":
          return onHoverClr;
        case "active":
          return onSelectClr;
        default:
          return "";
      }
    }
  };

  return (
    <div className="star-rating">
      {Array(noOfStar)
        .fill("_")
        .map((star, i) => (
          <div
            key={i}
            className={`each-star`}
            onMouseOver={handleHoverOnStar}
            onMouseLeave={handleOnMouseLeave}
            onClick={handleSelect}
            id={i}
            style={{ color: getStarColor(i) }}
          >
            {startEl}
          </div>
        ))}
    </div>
  );
};

export default StarRating;
