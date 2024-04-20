import {useState} from "react"

import StarRating from "./components/StarRating";
import "./App.css";

function App() {

  const [poorRating, setPoorRating]= useState(false)

  const handleSelect = (startCount) => {
    if(startCount < 2){
      setPoorRating(true)
    }
    else{
      setPoorRating(false)
    }
  }

  return (
    <div className="App">
      <StarRating
        noOfStar={5}
        onSelect={handleSelect}
      />
      {poorRating ? <textarea  rows="4" cols = "30" placeholder="Please leaves a feedback. How can we improve ?"/>: null}
    </div>
  );
}

export default App;
