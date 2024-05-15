
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { CONTACTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "./constants/routes";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

import { Contacts } from "./pages/Contacts/Contacts";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";



function App() {

  return (
    <div>
     <Header/>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home/>} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={CONTACTS_ROUTE} element={<Contacts />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
