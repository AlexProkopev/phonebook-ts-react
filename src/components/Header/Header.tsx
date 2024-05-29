import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "src/constants/routes";
import { logOutUser } from "src/redux/auth/auth.operations";
import {
  selectAuthIsLoggedIn,
  selectAuthUserData,
} from "src/redux/auth/auth.selectors";

const Header = () => {
  const userData = useSelector(selectAuthUserData);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch<any>(logOutUser())
  
  return (
    <header>
      <nav>
        <Link to={HOME_ROUTE}>Home</Link>
        {isLoggedIn ? (
          <>
            <Link to={CONTACTS_ROUTE}>Contacts</Link>
            <div>
              <p>Hello,{userData?.name}</p>
              <button type="button" onClick={onLogOut}>logout</button>
            </div>
          </>
        ) : (
          <>
            <Link to={REGISTER_ROUTE}>Registration</Link>
            <Link to={LOGIN_ROUTE}>Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
