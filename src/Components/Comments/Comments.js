import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentsDetails from '../CommentsDetails/CommentsDetails';
import './Comment.css'

const Comments = () => {
    const { postId} = useParams()
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [])
    return (
        <div>
            <h5>Comments: </h5>
                {
                    comments.map(comment => <CommentsDetails comment ={comment}></CommentsDetails>)
                }
        </div>
    );
};

export default Comments;