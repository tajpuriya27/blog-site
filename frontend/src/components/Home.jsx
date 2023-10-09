import { getBlogs } from "../services/blogRequest";
import { useQuery } from "@tanstack/react-query";
const Home = () => {
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
      <h3>Welcome to Bloging Site</h3>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-class">
          <h3>{blog.title}</h3>
          {blog.content}
        </div>
      ))}
    </>
  );
};
export default Home;
