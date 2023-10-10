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
      <div className="card-columns">
        {blogs.map((blog) => (
          <div key={blog.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.content}</p>
              <p className="card-text text-right">
                <small className="text-muted ">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
