import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, Button, Grid, Badge } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../redux/actions/userAction";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  abRoot: {
    backgroundColor: "#802C6E",
    position: "sticky",
  },
  title: {
    flexGrow: 1,
  },
  gorw: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  signup: {
    color: "white",
    textDecoration:'none'
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const local = JSON.parse(localStorage.getItem("cartItem"));
  const RegisterInfo = JSON.parse(localStorage.getItem("RegisterInfo"))
  const userInfoLocal=JSON.parse(localStorage.getItem("userInfo"));

  const dispatch=useDispatch();
  const navigate = useNavigate();
  const goToCart = () => {
    // navigate("/cart");
    // console.log(cartItem);
    // console.log(local.length);
    // console.log(firstName);
  };
  const exitHandle=()=>{
    dispatch(signout());
  }

  return (
    <div>
      <AppBar position="static" classes={{ root: classes.abRoot }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              logo
            </Link>
          </Typography>

          <Grid className={classes.grow} container spacing={3}>
            <Grid xs={5}></Grid>
            <Grid xs={1}>
              {" "}
              <Link className={classes.link} to="/">
                Home
              </Link>
            </Grid>
            <Grid xs={1}>
              {" "}
              <Link className={classes.link} to="/products">
                Product
              </Link>
            </Grid>
            <Grid xs={1}>
              {" "}
              <Link className={classes.link} to="/about">
                About
              </Link>
            </Grid>
          </Grid>

          {
            <Button color="inherit" onClick={() => goToCart()}>
              <Badge color="secondary" badgeContent={cartItems.length}>
                <ShoppingCartIcon />
              </Badge>
            </Button>
          }

          {userInfoLocal ? (
            <>
              <Link to="#" className={classes.signup}>{userInfoLocal.firstName} </Link>
              <Button color="inherit" onClick={exitHandle}>
                <ExitToAppIcon />{" "}
              </Button>
            </>
          ) : (
            <Button color="inherit">
              <Link to="/login" className={classes.signup}>
                <PersonAddIcon />{" "}
              </Link>
            </Button>
          )}
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
