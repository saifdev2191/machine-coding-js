import { useState } from "react";

const StarRating = (props) => {
  const {
    noOfStar = 5,
    starColor = <>&#9734;</>,
    onHoverClr = <>&#11088;</>,
    onSelectClr = <>&#127775;</>,
    onSelect = () => {},
    minVal = 0,
  } = props;

  const initState = () => {
    let obj = {};
    let i = 1;
    while (i <= noOfStar) {
      obj[i] = starColor;
      i++;
    }
    return obj;
  };

  const [starConfig, setStarConfig] = useState(initState());
  const [isSlected, setIsSelected] = useState(false)

  const setClr = (e, clrToSet) => {
    const result = { ...starConfig };
    const currentStarId = e.target.id;
    for(let i = 1; i <= noOfStar; i++){
        if(i <= currentStarId){
            result[i] = onSelectClr;
        }
        else{
            result[i] = starColor
        }
    }
    setStarConfig(result);
  }

  const handleHoverOnStar = (e) => {
    setIsSelected(false)
    setClr(e, onHoverClr)
  };

  const handleSelect = (e) => {
    setClr(e, onSelectClr)
    setIsSelected(true)
    onSelect(e.target.id)
  };

  const handleOnMouseLeave = () => {
      if(!isSlected){
        setStarConfig(initState())
      } 
  };

  return (
    <div className="star-rating">
      {Array(noOfStar)
        .fill("_")
        .map((star, i) => (
          <div
            key={i}
            className="each-star"
            onMouseOver={handleHoverOnStar}
            onMouseLeave={handleOnMouseLeave}
            onClick={handleSelect}
            id={i + 1}
          >
            {starConfig[i+1]}
          </div>
        ))}
    </div>
  );
};

export default StarRating;
