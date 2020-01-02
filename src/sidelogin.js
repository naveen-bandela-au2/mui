import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://centralindia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fklayschools-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!AW0pJjAtAkuUSZim55vtMnvfXJ5_cTxAk8Q-z15zhtXZM5EXlqyGQIpb-aJGFtuk%2Fitems%2F01E2KOFPSSVAHXCRVVN5A3SGDF37GDVF5P%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAva2xheXNjaG9vbHMtbXkuc2hhcmVwb2ludC5jb21AZjczZTRkOGItMTNhNy00OGZlLTkyYjgtY2NiYjA0ZWE1OTRjIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTU3NjgyMjgyOSIsImV4cCI6IjE1NzY4NDQ0MjkiLCJlbmRwb2ludHVybCI6InpMN09BazN4YlJzSTR0eFFJaTg2ZXJHbTlBVE1ac0RoMzRrb1hUMldWU2M9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMjEiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6Ik0yTTBNakl6T1dZdFpUQTVOeTB3TURBd0xUUTRNVEF0TldJeU16RmpNelUzWXpZMCIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJNall5T1Raa01ERXRNbVF6TUMwMFlqQXlMVGswTkRrdE9UaGhObVUzT1dKbFpETXkiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfG5hdmVlbi5iQGtsYXlzY2hvb2xzLmNvbSIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwOGQyNzI1OTVAbGl2ZS5jb20iLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMyJ9.aDJXNkVNVEZTVFJTamwxSTJKSHNyR0pmL2ZlU1dQWStCOCtZZFkvaFRURT0&encodeFailures=1&srcWidth=&srcHeight=&width=586&height=589&action=Access)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#00bac6",
    backgroundPosition: "center",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#00bac6"
    }
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background:"#00bcd4",
    padding: '8px 55px',
    '&:hover': {
      backgroundColor: "#2196f3",
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: 'green',
      }
  }}
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={5} md={8} className={classes.image} />
      <Grid item xs={12} sm={7} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         
          <Grid container xs={12} sm={12} md={12} spacing={3} >
               
               <Hidden only={['lg','sm','md']}>
               <Grid item  md={6} >
               <img src="https://static.wixstatic.com/media/628a03_dad1ee75f8404a02adf375836e96e16e~mv2.png/v1/fill/w_156,h_116,al_c,q_85,usm_0.66_1.00_0.01/citi_logo.webp" />
         
               </Grid>
               </Hidden>
               <Grid item justify="space-around">  
               <img src="https://static.wixstatic.com/media/628a03_dad1ee75f8404a02adf375836e96e16e~mv2.png/v1/fill/w_156,h_116,al_c,q_85,usm_0.66_1.00_0.01/citi_logo.webp" />
         
                </Grid>
            </Grid>
            
          <form className={classes.form} noValidate>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
              <Grid container justify="flex-end" sm={12}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
            </Grid>
            <Grid container justify="center" >
             
            <Button
              type="submit"
              size="medium"
              variant="contained"
             color="red"
              className={classes.submit}
            >
              Login
            </Button>
            
            </Grid>
          
           
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
