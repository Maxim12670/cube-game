import { useEffect, useState } from "react";
import { selectValues, btnData } from "./config";
import style from './Game.module.scss';
import { MyButton, MySelect, MyButtonCount } from "../../../shared/ui";
import { Cube } from '../index'
import { FindResult, RollDice } from "../../../shared/feature";
import { userStore } from "../../../Entities/user/model/store";

interface GameProps {
  isAuth: boolean;
}

function Game({ isAuth }: GameProps) {

  const [currentBtn, setCurrentBtn] = useState<string | null>(null);
  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const [canStart, setCanStart] = useState<boolean>(false);
  const [hasInputError, setHasInputError] = useState<boolean>(false);
  const [betSize, setBetSize] = useState<number | undefined>(selectValues[0]);
  const [title, setTitle] = useState(
    <h2 className={`${style['game__title']} ${isAuth ? style.active : ''}`}>Сделайте ставку</h2>);
  const [numberDots, setNumberDots] = useState<number>(1);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const { balance, updateBalance } = userStore();

  const handleSelectCurrentBtn = (data: string) => {
    setCurrentBtn(data === currentBtn ? null : data);
  }

  const handleSetBetSize = (value: number) => {
    setBetSize(value);
  }

  const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentNumber(Number(e.target.value));
  }

  const handleStartGame = () => {
    RollDice(setIsRolling, setNumberDots);
  }

  useEffect(() => {
    if (isRolling === false) {
      FindResult(currentBtn, numberDots, currentNumber, betSize!, setTitle, updateBalance);
    }
  }, [isRolling, numberDots]);

  useEffect(() => {
    setCanStart(currentBtn !== null ? true : false)
  }, [currentBtn]);

  useEffect(() => {
    if(betSize! <= balance && currentBtn !== null && !hasInputError) {
      setCanStart(true);
    } else {
      setCanStart(false);
    }
  }, [betSize, currentBtn, balance, hasInputError]);

  return (
    <div>
      <header className={style.header}>
        <span className={style['header__title']}>Test Game</span>
        <span className={`${style['header__balance']} ${isAuth ? style.active : ''}`}>
          {`${balance} (TND)`}
        </span>
      </header>
      <div className={style.game}>
        {isAuth ?
          title
          : <h2 className={`${style['game__title']}`}>Сделайте ставку</h2>
        }
        <div className={style['game__cube']}>
          <Cube number={numberDots} isRolling={isRolling} />
        </div>
        <div>
          <h3 className={style['game__label']}>Размер ставки</h3>
          <MySelect
            selectValues={selectValues}
            currentValue={betSize}
            onClick={handleSetBetSize} />
          <h3 className={style['game__label']}>Варианты ставок</h3>
          <div className={style['game__wrapper']}>
            {btnData.map((item) =>
              <div className={style['game__btn-small']} key={item.data}>
                <MyButton
                  colorType={'violet'}
                  children={item.children}
                  isActive={currentBtn === item.data}
                  onClick={() => handleSelectCurrentBtn(item.data)}
                />
              </div>
            )}
            <div className={style['game__btn']}>
              <MyButtonCount
                isActive={currentBtn === 'btn-input'}
                currentNumber={currentNumber}
                onChange={handleInputNumber}
                onErrorChange={setHasInputError}
                onClick={() => handleSelectCurrentBtn('btn-input')}
              />
            </div>
            <div className={style['game__btn']}>
              <MyButton
                colorType='green'
                children='Сделать ставку'
                isDisabled={!canStart}
                onClick={handleStartGame} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game;

