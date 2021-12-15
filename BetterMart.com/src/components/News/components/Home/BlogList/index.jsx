import React from "react";
import BlogItem from "./BlogItem";
import "./styles.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="News__blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
