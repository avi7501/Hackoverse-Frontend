import { useState,useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Compiler from "./pages/Compiler";
import Explore from "./pages/Explore";
import Sidebar from "./components/Sidebar";
import Events from "./pages/Events";
import Certificate from "./pages/Certificate";
import MyEvents from "./pages/MyEvents";
const App = () => {
  const location = useLocation();
  const [user, setUser] = useState([]);
  useEffect(() => {
    localStorage.setItem({id:0,name:"Avinash Muralidharan",type:"learner"}, JSON.stringify(user));
  }, [user]);
  const uid=localStorage.getItem(user.id);

  return (
    <div className="flex flex-row h-full w-full">
      {!location.pathname.includes("/logged/") && <NavBar />}
      {location.pathname.includes("/logged/") && <div className="h-full"><Sidebar /></div>}
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* element={<Events/>}/> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path={"/logged/dashboard/"} element={<Dashboard />} />
        <Route path={"/logged/explore/"} element={<Explore />} />
        <Route path={"/logged/events/"} element={<Events />} />
        <Route path={"/logged/compiler/"} element={<Compiler />} />
        <Route path={"/logged/certificate/"} element={<Certificate />} />
        <Route path={"/logged/myevents/"} element={<MyEvents />} />
      </Routes>
    </div>
  );
};

export default App;
