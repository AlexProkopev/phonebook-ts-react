import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "./constants/routes";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

import { Contacts } from "./pages/Contacts/Contacts";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/auth.operations";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { Loader } from "./components/Loader/Loader";
import { selectAuthIsRefreshing } from "./redux/auth/auth.selectors";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch<any>(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <div>
      <Header />

      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route
          path={LOGIN_ROUTE}
          element={
            <RestrictedRoute>
              <Login />
            </RestrictedRoute>
          }
        />
        <Route
          path={CONTACTS_ROUTE}
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path={REGISTER_ROUTE}
          element={
            <RestrictedRoute>
              <Register />
            </RestrictedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
