import style from './ShowTitle.module.scss';

const ShowTitle = (
  isWin: boolean,
  numberCube: number,
  profit?: number) => {

  const title = (<h2 className={style['game__title']}>Результат броска кубика: {numberCube}</h2>)
  const winSubtitle = (<h3 className={style['game__subtitle']}>Вы выиграли {profit} TND!</h3>);
  const loseSubtitle = (<h3 className={style['game__subtitle']}>Повезет в следующий раз</h3>);

  return (
    <>
      {title}
      {isWin ? winSubtitle : loseSubtitle}
    </>
  );
}

export default ShowTitle;