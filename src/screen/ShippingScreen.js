import React,{useState} from 'react';
import CheckoutSteps from '../component/CheckoutSteps';
import "../style/style.css";
import { Button} from "@material-ui/core";
import {TextField} from "@material-ui/core";
const ShippingScreen = () => {
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");
    const handleSubmit=(e)=>
    {
        e.preventDefault();
    }
    return (
        <div>
            {/* <CheckoutSteps step1 step2/> */}
     <form onSubmit={handleSubmit} className="form">
    {/* <img src={img} height="80px" width="80px" /> */}
    <TextField
      id="outlined-basic"
      label="Full Name"
      variant="outlined"
      type="text"
      placeholder="Enter lastName"
      name="FullName"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
    />

    <TextField
      fullWidth
      id="outlined-basic"
      label="address"
      variant="outlined"
      type="address"
      placeholder="Enter address"
      name="address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
    />
    <TextField
      fullWidth
      id="outlined-basic"
      label="city"
      variant="outlined"
      type="city"
      placeholder="Enter city"
      name="city"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />

<TextField
      fullWidth
      id="outlined-basic"
      label="city"
      variant="outlined"
      type="city"
      placeholder="Enter city"
      name="city"
      value={postalCode}
      onChange={(e) => setPostalCode(e.target.value)}
    />
    <TextField
      fullWidth
      id="outlined-basic"
      label="country"
      variant="outlined"
      type="country"
      placeholder="Enter country"
      name="country"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    />
    <Button
      color="primary"
      id="button"
      variant="contained"
      fullWidth
      type="submit"
    >
      Submit
    </Button>

  </form>
        </div>
    );
};

export default ShippingScreen;