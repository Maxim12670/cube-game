import style from './ModalWindow.module.scss';
import { MyButton, MyInput } from '../index';
import { useState } from 'react';

interface ModalWindowProps {
  isOpen: boolean;
  closeModal: () => void;
  submitForm: (login: string, password: string) => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ isOpen, closeModal, submitForm }) => {

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleClick = async () => {
    await submitForm(login, password);
    closeModal();
  }
  const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  }

  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }


  if (!isOpen) return null;

  return (
    <div className={style.modal}>
      <div className={style['modal__container']}>
        <div
          className={style['modal__close-btn']}
          onClick={closeModal}>
          <svg width="14.595093" height="14.000000" viewBox="0 0 14.5951 14">
            <path id="Vector" d="M14.59 1.41L13.12 0L7.29 5.58L1.46 0L0 1.41L5.82 7L0 12.59L1.46 14L7.29 8.41L13.12 14L14.59 12.59L8.76 7L14.59 1.41Z"
              fill-opacity="1.000000"
              fill-rule="nonzero" />
          </svg>
        </div>
        <div className={style['modal__form']}>
          <MyInput
            type='text'
            placeholder='Login'
            className={style['modal__input']}
            value={login}
            onChange={handleInputLogin} />
          <MyInput
            type='text'
            placeholder='Password'
            className={style['modal__input']}
            value={password}
            onChange={handleInputPassword} />
          <MyButton
            colorType='violet'
            children='Войти'
            onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;