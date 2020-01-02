import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  fontFamily: {
    fontFamily: "ProximaNova"
  },
  h1: {
    fontSize: "35px",
    textTransform: "capitalize"
  },
  h2: {
    fontSize: "28px",
    textTransform: "capitalize"
  },
  h3: {
    fontSize: "22px",
    textTransform: "capitalize"
  },
  h4: {
    fontSize: "14px",
    textTransform: "capitalize",
    letterSpacing: '1px'
  },
  d1: {
    fontSize: "16px",
    letterSpacing: '1px'
    
  },
  d2: {
    fontSize: "14px"
  },
  d3: {
    fontSize: "14px",
    color:'#5c5c5c'
  }
 
}));

const H1 = props => {
  const classes = useStyles();

  return (
    <Typography align={props.align} className={(classes.fontFamily, classes.h1)} style={{color:props.color}} >
      {props.text}
    </Typography>
  );
};

const H2 = props => {
    const classes = useStyles();
  
    return (
      <Typography align={props.align} className={(classes.fontFamily, classes.h2)} style={{color:props.color}}>
        {props.text}
      </Typography>
    );
  };

  
  const H3 = props => {
    const classes = useStyles();
  
    return (
      <Typography align={props.align} className={(classes.fontFamily, classes.h3)} style={{color:props.color,textTransform:props.textTransform}}>
        {props.text}
      </Typography>
    );
  };

  const H4 = props => {
    const classes = useStyles();
  
    return (
      <Typography align={props.align} className={(classes.fontFamily, classes.h4)} style={{color:props.color,textTransform:props.textTransform}}>
        {props.text}
      </Typography>
    );
  };

  const D1 = props => {
    const classes = useStyles();
  
    return (
      <Typography align={props.align} className={(classes.fontFamily, classes.d1)} style={{color:props.color}}>
        {props.text}
      </Typography>
    );
  };
  
  const D2 = props => {
    const classes = useStyles();
  
    return (
      <Typography align={props.align} className={(classes.fontFamily, classes.d2)} style={{color:props.color}}>
        {props.text}
      </Typography>
    );
  };
  
  const D3 = props => {
    const classes = useStyles();
  
    return (
      <Typography align={props.align} className={(classes.fontFamily, classes.d3)} style={{color:props.color}}>
        {props.text}
      </Typography>
    );
  };
  
  

export { H1,H2,H3,H4,D1,D2,D3 };
