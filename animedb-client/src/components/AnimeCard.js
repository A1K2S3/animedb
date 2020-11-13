import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
  },
  media: {
    height: 180,
  },
});

export default function AnimeCard(props) {
  const classes = useStyles();

  const { img, name, driveLink } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea className="anime" onClick={() => window.open(driveLink)}>
        <CardMedia
          component="img"
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <div className="overlay" />
        <Typography variant="body2" className="anime-name" component="p">
          {name}
        </Typography>
      </CardActionArea>
    </Card>
  );
}
