import { getBlogs } from "./services/request";
import { useQuery } from "@tanstack/react-query";
import "./main.css";

import BlogForm from "./components/BlogForm";
import LoginPage from "./components/Login";

const App = () => {
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
      {/* <h1>BlogSite</h1> */}
      {/* <BlogForm /> */}
      <LoginPage />
      {/* 
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-class">
          <h3>{blog.title}</h3>
          {blog.content}
        </div>
      ))} */}
    </>
  );
};

export default App;
