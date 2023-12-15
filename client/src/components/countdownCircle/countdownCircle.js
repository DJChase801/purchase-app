import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./countdownCircle.css";

const renderTime = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="text">Automatic Confirmation in:</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

export default function Circle({ finishFunc }) {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        size={150}
        duration={20}
        colors={['#00fdcf', '#00fdcf', '#fc6c6cae', '#ff0000ae']} 
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
          finishFunc();
          return { shouldRepeat: false }
        }}
      >
        {({ remainingTime }) => renderTime({remainingTime})}
      </CountdownCircleTimer>
    </div>
  );
}
