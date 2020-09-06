import React, { useState, useEffect } from 'react';
import Home from '../Home/Home';

const Main = () => {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);
    return (
        <div>
        {posts.map(post => <Home post ={post}></Home> )}
        </div>
    );
};

export default Main;