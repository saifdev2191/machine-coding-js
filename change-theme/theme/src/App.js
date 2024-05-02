import {WrapTheme} from "./context/context"
import Navbar from "./components/Navbar"

import './App.css';

function App() {
  // const [state, ] = ConsumeContext()
  // console.log(state)
  return (
      <WrapTheme>
        <Navbar />
      </WrapTheme>
  );
}

export default App;
