import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../services/blogRequest";
import { useState } from "react";

const BlogForm = () => {
  const queryClient = useQueryClient();
  const newBlogMutation = useMutation(createBlog, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    author: "",
    url: "",
  });

  const handleBlogSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    newBlogMutation.mutate(newBlog);
  };

  const handleFormChange = (e) => {
    let myObj = {};
    myObj[e.target.name] = e.target.value;
    setNewBlog({ ...newBlog, ...myObj });
  };

  return (
    <>
      {/* <form onSubmit={handleBlogSubmit}>
        <label htmlFor="title">Title of Blog:</label>
        <input type="text" name="title" onChange={handleFormChange} />
        <label htmlFor="blogContent">Content:</label>
        <input type="text" name="content" onChange={handleFormChange} />
        <label htmlFor="blogAuthor">Author of Blog:</label>
        <input type="text" name="author" onChange={handleFormChange} />
        <label htmlFor="blogUrl">Blog URL:</label>
        <input type="url" name="url" id="" onChange={handleFormChange} />
        <button type="submit">Submit</button>
      </form> */}

      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    onChange={handleFormChange}
                    name="username"
                  />
                  <label className="form-label" htmlFor="typeEmailX-2">
                    Username
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    onChange={handleFormChange}
                    name="password"
                  />
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Password
                  </label>
                </div>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    Remember password
                  </label>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <br />
                Have no account? <a href="/register">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogForm;
