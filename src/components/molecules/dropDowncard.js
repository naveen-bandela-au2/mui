import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Grid,
  Box,
  Select,
  MenuItem,
  Input
} from "@material-ui/core";
import { H1, H2,D1 } from "../atoms/TypoTypes";
import colors from "../../style/colors";

const useStyles = makeStyles({
  card: {
    boxShadow: "0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)",
    borderRadius: 0
  }
});

const DropDowncard = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <H2 text={props.title} />
          </Grid>
          <Grid item>
            <Select defaultValue="weekly" input={<Input disableUnderline />}>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="Fortnight">Fortnight</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Box my={1}>
          <H1 align="center" color={colors.primary} text={props.countValue} />
        </Box>
        <Grid container spacing={5} justify="space-between">
          <Grid item>
            <D1 text={props.leftContent} />
            <D1 align="center" text={props.leftContentValue} />
          </Grid>
          <Grid item>
            <D1 text={props.rightContent} />
            <D1 align="center" text={props.rightContentValue} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DropDowncard;
