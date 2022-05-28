import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Box,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart,removeFromCart } from "../redux/actions/cartAction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import {DeleteIcon,RemoveIcon} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F3E8EF",
    marginLeft: "auto",
    marginRight: "auto",
    width: "900px",
    height: "300px",
    marginTop: "0px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
  },
  root2: {
    border: "1px solid #802C6E",
    marginLeft: "auto",
    marginRight: "auto",
    padding:'10px',
    width: "600px",
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  paper1: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  button2: {
    backgroundColor: "#802C6E",
  
    height: "50px",
  },link:{
    color: "white",
    textDecoration:'none',
  }
}));

const CartComponent = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const nagivate=useNavigate();
  useEffect(() => {
    setQty(window.location.href.split("=")[1]);
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [id, qty, dispatch]);
const handleRemoveItem=(id)=>{
  // console.log(id);
  dispatch(removeFromCart(id))
}
const goShipping=()=>
{
// nagivate('/shipping')
}
  return (
    <div>
      <Box className={classes.root2}>
        <h3>
          Subtotal({cartItems.reduce((a, c) => a + c.qty, 0)} items):$
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>

        <Button variant="contained" className={classes.button2} onClick={goShipping()}>
          <Link to='/shipping' className={classes.link}>
          Checkout
          </Link>
        </Button>
      </Box>
      {cartItems.map((x) => (
        <Grid container spacing={5} xs={12} className={classes.root} key={x.id}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <img src={x.image} height="200px" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper1}>
              {" "}
              <h2>{x.name}</h2>{" "}
              {x.countInStock > 0 && (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Quantity
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Quantity"
                    value={x.qty}
                    onChange={(e) => {setQty(e.target.value)}
                    }
                  >
                    {[...Array(x.countInStock).keys()].map((x) => (
                      <MenuItem value={x + 1}> {x + 1}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
              <p>${x.price}</p>
              <Button variant="outlined"> {/* <AddIcon /> */}</Button>
              <Button variant="outlined" onClick={()=>handleRemoveItem(x.product)}>
                  {" "}
                  {/* <RemoveIcon /> */}
                  delete
                </Button>
              <br />
              {/* <Button color="secondary" ><DeleteIcon/></Button> */}
            </Paper>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default CartComponent;
