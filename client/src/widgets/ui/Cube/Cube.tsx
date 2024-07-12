import './Cube.scss';
import React from 'react';
import { RenderDots } from '../../../shared/feature';

interface CubeProps {
  number: number;
  isRolling: boolean;
}

const Cube: React.FC<CubeProps> = ({ number, isRolling }) => {

  return (
    <>
      <div className="dice-container">
        <div className={`dice ${isRolling ? 'rolling' : ''}`}>
          <div className={`face face-${number}`}>
            {RenderDots(number)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cube;