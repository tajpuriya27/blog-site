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
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Create New Blog</h3>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typeEmailX-2">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    onChange={handleFormChange}
                    name="title"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Author
                  </label>
                  <input
                    type="text"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    onChange={handleFormChange}
                    name="author"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typePasswordX-2">
                    URL
                  </label>
                  <input
                    type="url"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    onChange={handleFormChange}
                    name="url"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Content
                  </label>
                  <textarea
                    type="text"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    onChange={handleFormChange}
                    name="content"
                    rows="10"
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Create Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogForm;
