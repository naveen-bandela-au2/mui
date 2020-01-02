import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { H4 } from "./TypoTypes";


const useStyles = makeStyles({
  avatar: {
    backgroundColor: "white",
    boxShadow: "0 0 4px rgba(0,0,0,0.19),0 0 4px rgba(0,0,0,0.19)",
    color: "black",
    borderColor: "rgba(0,0,0,0.19)",
    borderStyle: "solid",
    borderWidth: "2px"
  }
});

export default function UserAvatar(props) {
  const classes = useStyles();
  var letters = props.name
    .split(" ")
    .map(word => word[0])
    .join("");

  return (
    <Avatar className={classes.avatar}>
      <H4 text={letters} textTransform="uppercase"/>
    </Avatar>
  );
}
