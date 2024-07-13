import React, { FC, useEffect, useState } from 'react';
import style from './MyInput.module.scss';
import { isValidateString } from '../../lib/regex/validateString';

interface MyInputProps {
  type?: 'text' | 'number' | 'password';
  value: string;
  className?: string;
  placeholder: string;
  isDisabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: FC<MyInputProps> = ({ type = 'text', value, className, placeholder, isDisabled = false, onChange }) => {

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(!isValidateString(value))
  }, [value]);

  return (
    <>
      <input
        type={type}
        disabled={isDisabled}
        value={value}
        className={`${className} ${style.input} ${hasError ? style['input_error'] : ''}`}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className={`${style['error-label']} ${hasError ? style.active : ''}`}>
        Error
      </span>
    </>
  )
}

export default MyInput;