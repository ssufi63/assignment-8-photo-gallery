import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    height: 400,
    float: 'left',
    margin: 15,
  },
  media: {
    height: 200,
  },
  title: {
    height: 90,
    color: '#1B1464',
  },
  button: {
    textDecoration: 'none'
  }
}));


const Home = (props) => {
  const { id, title, } = props.post;
  const url = `https://picsum.photos/id/${id}/480`
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
        />
        <CardContent className={classes.title}>
          <Typography gutterBottom variant="subtitle1">
                  <h4>{title}</h4>
                </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={`/post/${id}`} className={classes.button}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon>send</SendIcon>}>See More</Button>
                </Link>
      </CardActions>
    </Card>
  );
}


export default Home;