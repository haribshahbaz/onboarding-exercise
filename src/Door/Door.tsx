import React, { useState } from 'react';
import './Door.css';
import doorImage from './door.png';
import doorOpenImage from './doorOpen.png';

interface DoorProps {
  number: number;
}

function Door({ number }: DoorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDoor, setIsDoor] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
      setIsButtonVisible(true);
      setIsDoor(false);
    }, 1000);
  };

  const handleCloseButtonClick = () => {
    setIsOpen(false);
    setIsButtonVisible(false);
  };

  return (
    <div className="door-container">
      <div className={`door ${isOpen ? 'open' : ''}`}>
        {isAnimating ? (
          <img src={doorOpenImage} alt="Door" />
        ) : (
          <img src={doorImage} alt="Door" />
        )}
        <button className="reveal-button" onClick={handleButtonClick}>
          {isOpen ? 'Close' : 'Reveal'}
        </button>
        {isButtonVisible && (
          <button className="behind-door-button" onClick={handleCloseButtonClick}>
            Behind Door {number}
          </button>
        )}
      </div>
    </div>
  );
}

export default Door;