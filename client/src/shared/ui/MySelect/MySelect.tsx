import React, { useState } from 'react';
import style from './MySelect.module.scss';

interface MySelectProps {
  selectValues: Array<number>
}

const MySelect: React.FC<MySelectProps> = ({ selectValues }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<number>();


  const handleToggleActive = () => {
    setIsActive(!isActive)
  }

  const handleItemClick = (value: number) => {
    setSelectValue(value);
    setIsActive(!isActive);
  }


  return (
    <div className={style.dropdown}>
      <button
        className={`${style['dropdown__button']} ${isActive ? style['dropdown__button-active'] : ''}`}
        onClick={handleToggleActive}>
        {selectValue == undefined ? selectValues[0] : selectValue}
      </button>
      <ul className={`${style['dropdown__list']} ${isActive ? style['dropdown__list-active'] : ''}`}>
        {selectValues.map((item) =>
          <li className={style['dropdown__list-item']} onClick={() => handleItemClick(item)}>{item}</li>
        )}
      </ul>
    </div>
  )
}

export default MySelect;