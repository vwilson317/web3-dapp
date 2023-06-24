import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../../hooks';
import styled, { keyframes } from 'styled-components';

// Define the keyframe animation for the countdown animation
const countdownAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.5);
    opacity: 0;
  }
`;

// Styled components for the countdown timer and animation
// const CountdownWrapper = styled.div`
//   font-size: 24px;
//   font-weight: bold;
//   color: #333333;
//   animation: ${({ animate }) => (animate ? `${countdownAnimation} 1s linear forwards` : 'none')};
// `;

// Styled components for the countdown timer and animation
const CountdownWrapper = styled.div;

const Countdown = () => {
  const [countdown, setCountdown] = useState(10);//useState(24 * 60 * 60); // 24 hours in seconds
//   const [animate, setAnimate] = useState(false);
    const [searchEnabled, setSearchEnabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // Trigger animation when countdown reaches 0
    if (countdown === 0) {
      //setAnimate(true); doesn't work
      setSearchEnabled(true); 
    }
  }, [countdown]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <CountdownWrapper>
      {formatTime(countdown)}
    </CountdownWrapper>
  );
};

export default Countdown;
