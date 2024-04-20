import { useEffect, useState } from 'react';

const ProgressBar = ({ progress, bgColor = 'green' }) => {
  useEffect(() => {
    console.log('progress', progress);
  }, [progress]);
  return (
    <div className="progress-bar">
      <span
        style={{ width: `${progress}%`, backgroundColor: bgColor }}
        className="progress-span"
      ></span>
      <span
        className="progress-percentage"
        role="progressbar"
        aria-valuenow={progress}
      >
        {progress}%
      </span>
    </div>
  );
};

export default ProgressBar;
