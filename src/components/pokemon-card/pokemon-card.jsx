import React from "react";
import T from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../card/card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const propTypes = {
  image: T.string,
  name: T.string,
  types: T.arrayOf(T.string),
  abilities: T.arrayOf(T.string),
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const PokemonCard = ({ image, name, types, abilities }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link href={image}>
          <CardMedia className={classes.media} image={image} title={name} />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Types: {types.join(", ")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Abilities: {abilities.join(", ")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

PokemonCard.propTypes = propTypes;
