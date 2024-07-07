import React, { useEffect, useState } from 'react';
import style from './MyButtonCount.module.scss';
import { isValidateCount } from '../../lib/regex/validateCount';

const MyButtonCount = () => {

  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState<number>(1)
  const [hasError, setHasError] = useState<boolean>(false)

  const handleToggleActive = () => {
    setIsActive(!isActive);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value))
  }

  useEffect(() => {
    setHasError(!isValidateCount(String(inputValue)))
  }, [inputValue])

  return (
    <div className={style.wrapper}>
      <button className={`${style.button} ${isActive ? style.active : ''}`}
        onClick={handleToggleActive}>
        Конкретное число
      </button>

      <input
        type="number"
        defaultValue={inputValue}
        className={`${style.input} ${isActive ? style.active : ''} ${hasError ? style['input_error'] : ''}`}
        disabled={!isActive ? true : false} 
        onChange={handleChange}/>
    </div>
  )
}

export default MyButtonCount;