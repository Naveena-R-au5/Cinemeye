import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style from './list.module.css'
import m1 from '../../m1.jpg'
import m2 from '../../m2.jpg'
import m3 from '../../m3.jpg'
import m4 from '../../m4.jpg'
import m5 from '../../m5.jpg'
import m6 from '../../m6.jpg'


const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    
  },
  media: {
    height: 160,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <>
      <h3 className={style.h}>New arrivals</h3>
      <div className={style.main}>
          <div className={style.scroll}>
    <Card className={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={m1}
          title="Enola holmes"
        />
        <CardContent className={style.content}>
          <Typography gutterBottom variant="h5" component="h2">
          Enola holmes
          </Typography>
          <Typography variant="body2"  component="p">
            Action Drama 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={m2}
          title="Avengers"
        />
        <CardContent className={style.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Avengers
          </Typography>
          <Typography variant="body2"  component="p">
            Action drama movie
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={m3}
          title="Jumanji"
        />
        <CardContent className={style.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Jumanji
          </Typography>
          <Typography variant="body2"  component="p">
            Action drama comedy
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={m4}
          title="Joker"
        />
        <CardContent className={style.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Joker
          </Typography>
          <Typography variant="body2"  component="p">
            Comedy movie
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={m5}
          title="The Invisible Man"
        />
        <CardContent className={style.content}>
          <Typography gutterBottom variant="h5" component="h2">
          The Invisible Man
          </Typography>
          <Typography variant="body2"  component="p">
            Horror Drama
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={m6}
          title="Game of Thrones"
        />
        <CardContent className={style.content}>
          <Typography gutterBottom variant="h5" component="h2">
          Game of Thrones
          </Typography>
          <Typography variant="body2"  component="p">
            Drama Action
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <h4 className={style.more}>View more</h4>
    </div>
    </div>
    </>
  );
}
