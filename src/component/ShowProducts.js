import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Card, Grid } from "@material-ui/core";
import {
  CardMedia,
  ButtonGroup,
  Button,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Rating from './Rating'
import VisibilityIcon from "@material-ui/icons/Visibility";
import cart from "../assest/add-cart.png";
import cartdisable from "../assest/add-cart 1.png";

import "../style/style.css"



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 305,
    display: "flex",
    flexDirection: "column",
    justify: "center",
    alignItems: "center",
    paddingBottom: "20px",
  },
  media: {
    width: 235,
    paddingTop: "100%", // 16:9
  },Button:{
    color:'#802C6E'
  },
  status:
  {
    color:'red',
    textDecoration:'line-through'
  }
}));

const ShowProducts = (props) => {
  const {  products, setProducts } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  const anyCat = (cat) => {
    const updateList = products.filter((x) => x.category === cat);
    setProducts(updateList);
  };

  const onGo = (id) => {
    navigate(`/products/${id}`);
  };

 
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
          marginTop: "80px",
          marginBottom: "50px",
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            onClick={() => {
              setProducts(products);
            }}
          >
            All
          </Button>
          <Button
            onClick={() => {
              anyCat("men's clothing");
            }}
          >
            Men's Clothing
          </Button>
          <Button
            onClick={() => {
              anyCat("women's clothing");
            }}
          >
            women's clothing
          </Button>
      
        
        </ButtonGroup>
      </Box>

      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        {products?.map((p) => {
          return (
            <Grid item sm={7} md={3} key={p.id}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={p.image}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {p.name}
                  </Typography>
                </CardContent>
                <CardActions >
                  <IconButton aria-label="add to favorites">
                    ${p.price}
                  </IconButton>
                </CardActions>
                <CardActions >
                <Typography
                    
                  >
                 {p.countInStock >0? <span> Available</span >:<span  className={classes.status}>Not Available</span> }
                </Typography>
                </CardActions>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <Rating  rating={p.rating}></Rating>
                  </IconButton>
                </CardActions>
                <ButtonGroup
                  variant="text"
                  color="primary"
                  aria-label="text primary button group"
                >
                 {p.countInStock >0? <Button >
                    <img height="30px" width="30px" src={cart} />
                  </Button>:<Button disabled>
                    <img height="30px" width="30px" src={cartdisable} />
                  </Button> }

                  

                  <Button
                    className={classes.Button}
                    onClick={() => {
                      onGo(p._id);
                    }}
                  >
                    <VisibilityIcon />
                  </Button>
                </ButtonGroup>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ShowProducts;
