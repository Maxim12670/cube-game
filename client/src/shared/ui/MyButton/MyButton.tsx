import { FC, ReactNode } from 'react';
import style from './MyButton.module.scss';

interface MyButtonProps {
  colorType: 'green' | 'violet',
  isDisabled?: boolean,
  isActive?: boolean,
  children?: ReactNode | string
}

const MyButton: FC<MyButtonProps> =
  ({ colorType = 'green', isDisabled = false, isActive = false, children }) => {
    
    return (
      <button
        disabled={isDisabled}
        className={`${style.button} ${style[colorType]} ${isActive ? style.active : ''}`}>
        {children}
      </button>
    )
  }

export default MyButton;