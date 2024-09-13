import React from 'react';
import './BlogList.css';


function BlogList({ blogs }) {
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog._id}>
          <h2>{blog.title}</h2>
          <p>Author: {blog.author}</p>
          <p>{blog.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default BlogList;