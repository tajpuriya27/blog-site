import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./main.css";

import BlogForm from "./components/BlogForm";
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
        <Route path="/features" element={<LoginPage />} />
        <Route path="/about" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
