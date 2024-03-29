import React, { useState, useEffect } from 'react';
import Display from './Display';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        return response.json();
      })
      .then(data => {
        setBlogs(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      {error && <p>{error}</p>}
      <Display blogs={blogs} />
    </div>
  );
}

export default Blogs;
