import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(0),
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: 'url(https://giphy.com/embed/hf6tYzbprOaNOwo0Ff)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const post = {
    title: 'C-City',
    description: "Don't know where you want to move? We are here to help.",
    // image: 'https://source.unsplash.com/featured/?city,urban',
    image: 'https://media.giphy.com/media/PkLrYFJT9KVwkkvpjO/giphy.gif',
    imgText: 'main image description',
  };

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})`, backgroundPosition: '0px -310px' }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={10}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component='h1' variant='h3' color='inherit' gutterBottom>
              {post.title}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              {post.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
