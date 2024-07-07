import style from './MainPage.module.scss';
import MySelect from '../../shared/ui/MySelect/MySelect';
import MyButton from '../../shared/ui/MyButton/MyButton';
import MyButtonCount from '../../shared/ui/MyButtonCount/MyButtonCount';

const selectValues = [1.00, 2.00, 3.00, 5.00, 10.00, 25.00, 60.00, 100.00];
const btnData = [
  {
    children: 'Четное'
  },
  {
    children: 'Нечетное'
  },
  {
    children: 'От 1 до 3'
  },
  {
    children: 'От 4 до 6'
  },

]

function MainPage() {

  return (
    <>
      <header className={style.header}>
        <span className={style['header__title']}>Test Game</span>
        <span className={style['header__balance']}>119 999 991.10 (TND)</span>
      </header>

      <div className={style.game}>
        <h2 className={style['game__title']}>Сделайте ставку</h2>
        <h3 className={style['game__subtitle']}>Повезет в следующий раз</h3>


        <div className={style['game__cube']}>
          <div style={{ width: 130, height: 130, background: 'black' }}></div>
        </div>

        <div>
          <h3 className={style['game__label']}>Размер ставки</h3>
          <MySelect selectValues={selectValues} />
          <h3 className={style['game__label']}>Варианты ставок</h3>


          <div className={style['game__wrapper']}>
            {btnData.map((item) =>
              <div className={style['game__btn-small']}>
                <MyButton colorType={'violet'} children={item.children} />
              </div>
            )}
            <div className={style['game__btn']}>
              <MyButtonCount/>
            </div>

            <div className={style['game__btn']}>
              <MyButton colorType='green' children='Сделать ставку'/>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default MainPage;