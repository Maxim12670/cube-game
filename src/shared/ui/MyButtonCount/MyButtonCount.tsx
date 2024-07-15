import React, { useEffect, useState } from 'react';
import style from './MyButtonCount.module.scss';
import { isValidateCount } from '../../lib/regex/validateCount';

interface MyButtonCountProps {
  isActive?: boolean;
  currentNumber: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onErrorChange: (value: boolean) => void;
}

const MyButtonCount: React.FC<MyButtonCountProps> =
  ({ isActive = false, currentNumber, onChange, onClick, onErrorChange}) => {

    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
      const errorStatus = !isValidateCount(String(currentNumber));
      setHasError(errorStatus);
      if (onErrorChange) {
        onErrorChange(errorStatus);
      }
    }, [currentNumber, onErrorChange]);

    return (
      <div className={style.wrapper}>
        <button className={`${style.button} ${isActive ? style.active : ''}`}
          onClick={onClick}>
          Конкретное число
        </button>
        <input
          type="number"
          defaultValue={currentNumber}
          className={`${style.input} ${isActive ? style.active : ''} ${hasError ? style['input_error'] : ''}`}
          disabled={!isActive ? true : false}
          onChange={onChange} />
      </div>
    )
  }

export default MyButtonCount;