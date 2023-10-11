import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./main.css";

import LoginPage from "./components/Login";
import Navbar from "./components/NavBar";
import RegisterPage from "./components/Register";
import Home from "./components/Home";
import BlogForm from "./components/BlogForm";

const App = () => {
  const loggedIn = useSelector((state) => state.user);
  const isLoggedIn = Boolean(Object.keys(loggedIn).length);
  const notify = () => toast("Log In to add new blog!!");
  console.log("loggedIn user", loggedIn);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={2}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/addblog"
          element={
            isLoggedIn ? <BlogForm /> : notify() && <Navigate replace to="/" />
          }
        />
      </Routes>
    </>
  );
};

export default App;
