import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../services/request";
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
      <form onSubmit={handleBlogSubmit}>
        <label htmlFor="title">Title of Blog:</label>
        <input type="text" name="title" onChange={handleFormChange} />
        <label htmlFor="blogContent">Content:</label>
        <input type="text" name="content" onChange={handleFormChange} />
        <label htmlFor="blogAuthor">Author of Blog:</label>
        <input type="text" name="author" onChange={handleFormChange} />
        <label htmlFor="blogUrl">Blog URL:</label>
        <input type="url" name="url" id="" onChange={handleFormChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default BlogForm;
