import { Route, Routes } from "react-router-dom"
import Login from "./page/Login"
import SignUp from "./page/Signup";
import MainRoom from "./page/MainRoom";
import EnterRoom from "./page/EnterRoom";
import MakeRoom from "./page/MakeRoom";
import Lobby from "./page/Lobby";

const Routers = () => {
  return(
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/main" element={<MainRoom/>} />
        <Route path="/enter" element={<EnterRoom/>} />
        <Route path="/makeroom" element={<MakeRoom/>} />
        <Route path="/lobby" element={<Lobby/>} />
    </Routes>
  );
}

export default Routers;