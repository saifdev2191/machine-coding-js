import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar.jsx';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [timeOutVal, setTimeOutVal] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevState) => prevState + 10);
    }, 100);
    setTimeOutVal(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      clearInterval(timeOutVal);
    }
  }, [progress]);

  return (
    <>
      <ProgressBar progress={progress} bgColor={'red'} />
    </>
  );
}

export default App;
