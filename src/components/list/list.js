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
import a from '../../a.jpg'
import co from '../../co.jpg'
import f from '../../f.jpg'
import d from '../../d.jpg'

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
      <div className={style.head}>
       <h3 className={style.h}>Movie collections</h3>
       <h3 className={style.h2}>More</h3>
      </div>
      <div className={style.main2}>
          <div className={style.scroll2}>
    <Card className={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={a}
          title="Action"
        />
        <CardContent className={style.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Action
          </Typography>
          <Typography variant="body2"  component="p">
            Collection of Action movies
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={co}
          title="Contemplative Reptile"
        />
        <CardContent className={style.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Comedy
          </Typography>
          <Typography variant="body2"  component="p">
            Collection of comedy movies
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={f}
          title="Contemplative Reptile"
        />
        <CardContent className={style.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Fantastic
          </Typography>
          <Typography variant="body2"  component="p">
            collection of fantastic movies
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    </>
  );
}
