import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './PostDetails.css';

const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    },[])

    return (
        <div className='post-details'>
            <br />
            <br />
            <br />
            <h3><em style={{color:'#6F1E51',}}>Title:  </em> {post.title}</h3>
            <p><em style={{color:'#6F1E51',}}>Details:  </em> {post.body}</p>
            <Comments></Comments>

        </div>
    );
};

export default PostDetails;