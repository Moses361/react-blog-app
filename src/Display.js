import React from 'react';

const Display = ({ blogs }) => {
  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Display;
