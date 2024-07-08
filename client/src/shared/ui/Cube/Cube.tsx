import './Cube.scss';
import { useState } from "react";

const Cube = () => {
  const [number, setNumber] = useState<number>(1);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setNumber(randomNumber);
      setIsRolling(false);
      console.log(`Выпало число: ${randomNumber}`);
    }, 1000);
  };

  return (
    <>
      <div className="dice-container">
        <div className={`dice ${isRolling ? 'rolling' : ''}`}>
          <div className={`face face-${number}`}>
            {renderDots(number)}
          </div>
        </div>
      </div>

      <button onClick={rollDice} disabled={isRolling}>Бросить кубик</button>
    </>
  );
}

const renderDots = (num: number) => {
  switch (num) {
    case 1:
      return (
        <div className="dot center"></div>
      );
    case 2:
      return (
        <>
          <div className="dot top-left"></div>
          <div className="dot bottom-right"></div>
        </>
      );
    case 3:
      return (
        <>
          <div className="dot top-left"></div>
          <div className="dot center"></div>
          <div className="dot bottom-right"></div>
        </>
      );
    case 4:
      return (
        <>
          <div className="dot top-left"></div>
          <div className="dot top-right"></div>
          <div className="dot bottom-left"></div>
          <div className="dot bottom-right"></div>
        </>
      );
    case 5:
      return (
        <>
          <div className="dot top-left"></div>
          <div className="dot top-right"></div>
          <div className="dot bottom-left"></div>
          <div className="dot bottom-right"></div>
          <div className="dot center"></div>
        </>
      );
    case 6:
      return (
        <>
          <div className="dot top-left"></div>
          <div className="dot top-center"></div>
          <div className="dot top-right"></div>
          <div className="dot bottom-left"></div>
          <div className="dot bottom-center"></div>
          <div className="dot bottom-right"></div>
        </>
      );
    default:
      return null;
  }
};

export default Cube;