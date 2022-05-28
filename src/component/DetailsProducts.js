import { React, useEffect, useState } from "react";
import spinner from "../assest/spinner.gif";
import { useParams } from "react-router-dom";
import {
  makeStyles,
  Button,
  CardActions,
  IconButton,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { detailsProducts } from "../redux/actions/productsActions";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    boxShadow: "none",
  },
  paper1: {
    padding: theme.spacing(2),
    boxShadow: "none",
    fontSize: "1.5rem",
  },
  h3: {
    fontSize: "1.2rem",
    color: theme.palette.text.secondary,
    textTransform: "uppercase",
  },
  p: {
    fontSize: "51px",
    fontWeight: "20px",
  },
  price: {
    fontSize: "38px",
    color: "#802C6E",
  },
  rate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  star: {
    color: "#FFD36E",
  },
  desc: {
    color: theme.palette.text.secondary,
  },
  button2: {
    backgroundColor: "#802C6E",
    color: "white",
   
  },
  status: {
    color: "red",
    textDecoration: "line-through",
  },
}));

const DetailsProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goTocart = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  const Loading = () => {
    return (
      <>
        <img src={spinner} />
      </>
    );
  };
  const disptach = useDispatch();
  const [qty, setQty] = useState(1);
  const productsDetails = useSelector((state) => state.productDetails);
  const { loading, products } = productsDetails;
  useEffect(() => {
    disptach(detailsProducts(id));
  }, [disptach, id]);
  const classes = useStyles();
  return (
    <div>
      {!loading ? (
        <div>
          <div className={classes.root}>
            <Grid container xs={12} spacing={2}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <img src={products.image} alt="image" height={"500px"} />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper1}>
                  <h3 className={classes.h3}>{products.category}</h3>
                  <p className={classes.p}>{products.name}</p>
                  <div className={classes.rate}>
                    <IconButton aria-label="add to favorites">
                      <Rating rating={products.rating}></Rating>
                    </IconButton>
                  </div>
                  <h3 className={classes.price}> $ {products.price}</h3>
                  {products.countInStock > 0 && (
                    
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Quantity
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(products.countInStock).keys()].map((x) => (
                            <MenuItem value={x + 1}> {x + 1}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                  
                  )}
                  <p className={classes.desc}>{products.description}</p>
                  <CardActions>
                    <Typography>
                      {products.countInStock > 0 ? (
                        <span> Available</span>
                      ) : (
                        <span className={classes.status}>Not Available</span>
                      )}
                    </Typography>
                  </CardActions>
                  {products.countInStock > 0 ? (
                         <Button
                         variant="contained"
                         className={classes.button2}
                        onClick={()=>{goTocart()}}
                       >
                        Add to Cart
                       </Button>
                      ) : (
                        <Button
                        variant="contained"
                        className={classes.button2}
                        disabled
                       
                      >
                       Add to Cart
                      </Button>
                      )}
                 
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <Loading />
        )}
      
    </div>
  );
};

export default DetailsProducts;
