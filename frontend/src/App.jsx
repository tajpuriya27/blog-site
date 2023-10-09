import { getBlogs } from "./services/blogRequest";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import "./main.css";

import BlogForm from "./components/BlogForm";
import LoginPage from "./components/Login";
import Navbar from "./components/NavBar";
import RegisterPage from "./components/Register";

const App = () => {
  const loggedIn = useSelector((state) => state.user);
  const isLoggedIn = Boolean(Object.keys(loggedIn).length);
  console.log("loggedIn user", loggedIn);

  const blogInServer = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (blogInServer.isLoading) {
    return <div>Loading...</div>;
  }
  const blogs = blogInServer.data;

  return (
    <>
      <Navbar />
      {isLoggedIn && <BlogForm />}
      {!isLoggedIn && <LoginPage />}
      {!isLoggedIn && <RegisterPage />}

      {blogs.map((blog) => (
        <div key={blog.id} className="blog-class">
          <h3>{blog.title}</h3>
          {blog.content}
        </div>
      ))}
    </>
  );
};

export default App;
