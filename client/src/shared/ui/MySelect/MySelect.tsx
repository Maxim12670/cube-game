import React, { useState } from 'react';
import style from './MySelect.module.scss';

interface MySelectProps {
  selectValues: Array<number>;
  currentValue: number | undefined;
  onClick: (value: number) => void;
}

const MySelect: React.FC<MySelectProps> = ({ selectValues, currentValue, onClick }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  }

  const handleItemClick = (value: number) => {
    onClick(value);
    setIsActive(!isActive);
  }

  return (
    <div className={style.dropdown}>
      <button
        className={`${style['dropdown__button']} ${isActive ? style['dropdown__button-active'] : ''}`}
        onClick={handleToggleActive}>
        {currentValue ?? selectValues[0]}
      </button>
      <ul className={`${style['dropdown__list']} ${isActive ? style['dropdown__list-active'] : ''}`}>
        {selectValues.map((item) =>
          <li
            key={item}
            className={style['dropdown__list-item']}
            onClick={() => handleItemClick(item)}>
            {item}
          </li>
        )}
      </ul>
    </div>
  )
}

export default MySelect;