import React, { useState, useEffect } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList'; 

function App() {
  const [blogs, setBlogs] = useState([]); 

  // Fetch blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3001/blogs'); // Replace with your backend API URL
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  const handleAddBlog = async (newBlog) => {
    try {
      const response = await fetch('http://localhost:3001/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog), 
      });
      const data = await response.json();
      setBlogs([...blogs, data]);
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <div>
      <h1>My Blog</h1>
      <BlogForm onAddBlog={handleAddBlog} />
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
