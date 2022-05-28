import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import img from "../assest/intro.svg";
const useStyles = makeStyles(() => ({
  root: {
    marginTop:'60px'
  },
  h1:{
      fontSize:'20px',
      
      
  },
  p:{
      color:'gray',
      fontWeight:'10px'
  }

}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        xs={12}
        className={classes.root}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={4} className={classes.h1}>
          <h1>New Season arrivals</h1>
          <p className={classes.p}>check out all the trands</p>
        </Grid>

        <Grid item xs={3}>
          <img src={img} height="400px" />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};

export default Header;
