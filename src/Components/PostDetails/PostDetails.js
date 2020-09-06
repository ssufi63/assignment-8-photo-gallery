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
        <div>
            <div  className='post-details'>
            <p><em><strong>Title:  </strong></em> {post.title}</p>
            <p><em><strong>Details:  </strong></em> {post.body}</p>
            </div>
            <Comments></Comments>

        </div>
    );
};

export default PostDetails;