import React, { FC, useEffect, useState } from 'react';
import style from './MyInput.module.scss';
import { isValudateString } from '../../lib/regex/validateString';

interface MyInputProps {
  type?: 'text' | 'number',
  placeholder: string,
  isDisabled?: boolean
}

const MyInput: FC<MyInputProps> = ({ type = 'text', placeholder, isDisabled = false }) => {

  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  useEffect(() => {
    setHasError(!isValudateString(inputValue))
  }, [inputValue])

  return (
    <>
      <input
        type={type}
        disabled={isDisabled}
        value={inputValue}
        className={`${style.input} ${hasError ? style['input_error'] : ''}`}
        placeholder={placeholder}
        onChange={handleChange}
      />

      <span className={`${style['error-label']} ${hasError ? style.active : ''}`}>
        label
      </span>
    </>
  )
}

export default MyInput;