import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialUICard from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const Card = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <MaterialUICard className={classes.root} {...props}>
      {children}
    </MaterialUICard>
  );
};

export default Card;
