import './MainPage.scss';
import { Game, Login } from "../../widgets/ui";
import { userStore } from '../../Entities/user/model/store';


function MainPage() {

  const { isAuth } = userStore();

  return (
    <>
      <div className="container">
        <Game isAuth={isAuth} />
        <Login isAuth={isAuth} />
      </div>
    </>
  )
}

export default MainPage;