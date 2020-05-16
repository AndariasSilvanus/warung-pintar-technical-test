import React from "react";
import T from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../card/card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const propTypes = {
  image: T.string,
  name: T.string,
};

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

export const PokemonCard = ({ image, name }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

PokemonCard.propTypes = propTypes;
