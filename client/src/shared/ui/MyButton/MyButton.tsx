import { FC } from 'react';
import style from './MyButton.module.scss';

interface MyButtonProps {
  colorType: 'green' | 'violet';
  className?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  children?: string;
  onClick?: () => void;
}

const MyButton: FC<MyButtonProps> =
  ({ colorType = 'green', className, isDisabled = false, isActive = false, children, onClick }) => {
    
    return (
      <button
        disabled={isDisabled}
        onClick={onClick}
        className={`${className} ${style.button} ${style[colorType]} ${isActive ? style.active : ''}`}>
        {children}
      </button>
    )
  }

export default MyButton;