import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./main.css";

import LoginPage from "./components/Login";
import Navbar from "./components/NavBar";
import RegisterPage from "./components/Register";
import Home from "./components/Home";

const App = () => {
  const loggedIn = useSelector((state) => state.user);
  const isLoggedIn = Boolean(Object.keys(loggedIn).length);
  console.log("loggedIn user", loggedIn);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
