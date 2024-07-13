import style from './Login.module.scss';
import { MyButton, ModalWindow } from '../../../shared/ui';
import { UseModal } from '../../../shared/feature';
import { userStore } from '../../../Entities/user/model/store';


const Login = ({ isAuth }: { isAuth: boolean }) => {

  const { isOpen, openModel, closeModal } = UseModal();
  const { authorizeUser } = userStore();

  const handleSubmitForm = async (login: string, password: string) => {
    await authorizeUser(login, password);
  }

  return (
    <>
      <div className={`${style.login} ${!isAuth ? style.active : ''}`}>
        <header className={style['header']}>
          <h2 className={style['header__title']}>
            Test Game
          </h2>
          <div className={style['header__wrapp']}>
            <MyButton
              colorType='violet'
              children='Вход'
              onClick={openModel} />
            <MyButton
              colorType='violet'
              className={style['header__btn-registr']}
              children='Регистрация' />
          </div>
        </header>
        <h2 className={style['login__title']}>Войдите, чтобы продолжить</h2>
      </div>
      <ModalWindow
        isOpen={isOpen}
        closeModal={closeModal}
        submitForm={handleSubmitForm} />
    </>
  )
}

export default Login;