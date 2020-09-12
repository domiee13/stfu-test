import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
		maxWidth: 645,
		background:"rgba(0,0,0,0.4)",
		maxHeight:550,
		margin:'20px'
  },
  media:{
      height:440,
  },
  title:{
		fontSize:'2rem',
    color:'#fff',
    fontFamily:"Staatliches"
	},
	desc:{
		fontSize:'1.5rem',
    color:'#fff',
    fontFamily:"Caveat"
	}
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}   
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={process.env.PUBLIC_URL + '/assets/bg1.png'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Not a supraaaa
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            Make by Noxics
          </Typography>
        </CardContent>
    </Card>
  );
}
