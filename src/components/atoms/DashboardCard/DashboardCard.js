import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent
  } from "@material-ui/core";

  const useStyles = makeStyles({
    card: {
      boxShadow: "0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)",
      borderRadius: 0
    }
  });
  const DashboardCard = props => {
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
                {props.children}
            </CardContent>
        </Card>   
    )
  }

  export default DashboardCard;
  