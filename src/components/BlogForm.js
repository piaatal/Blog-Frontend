import React, { useState } from 'react';

function BlogForm({ onAddBlog }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newBlog = { title, author, content };
    onAddBlog(newBlog);
    setTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Author:</label>
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <label>Content:</label> 
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Add Blog</button>
    </form>
  );
}

export default BlogForm;