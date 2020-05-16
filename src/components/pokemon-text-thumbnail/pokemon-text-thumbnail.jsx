import React from "react";
import T from "prop-types";
import Card from "../card/card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const propTypes = {
  text: T.string,
  onClick: T.func,
};

export const PokemonTextThumbnail = ({ text, onClick }) => {
  return (
    <Card>
      <ButtonBase onClick={onClick}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </ButtonBase>
    </Card>
  );
};

PokemonTextThumbnail.propTypes = propTypes;
