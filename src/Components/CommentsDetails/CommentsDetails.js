import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './CommentsDetails.css';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const CommentsDetails = (props) => {
    const classes = useStyles();
    const {body, email,id} = props.comment
    const url1 = `https://randomuser.me/api/portraits/thumb/men/${id}.jpg`
    // const [images, setImages] = useState([]);
    // const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    // console.log(url);                                                 /////// comment out kora code diye image ashe na keno? code er kothay vul korsi kindly jodi bolen.
    // useEffect(()=>{
    //         fetch(url)
    //         .then(res => res.json())
    //         .then(data => setImages(data))
    // },[])
    return (
        <div className ='comment-detail' >
            <div className = 'avatar'>
              {/* <Avatar src={images.thumbnailUrl}></Avatar> */}
            <Avatar src={url1}></Avatar>
            </div>
            <div className='avatar-details'>
            <h5>{body}</h5>
            <Link><h6>{email}</h6></Link>
            </div>
        </div>
    );
};

export default CommentsDetails;