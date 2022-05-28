import { useEffect, useState } from "react";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import img from "../assest/man.png";
import { register } from "../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import { Alert, AlertTitle } from "@mui/material";

import { useSelector } from "react-redux";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;

  function RegisterSubmit(event) {
    event.preventDefault();

    dispatch(register(firstName, lastName, email, password));
  }

  return (
    <div>
      {error ? (
        <>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>{error}</strong>
          </Alert>
          <form onSubmit={RegisterSubmit} className="form">
            <img src={img} height="80px" width="80px" />
            <TextField
              id="outlined-basic"
              label="FirstName"
              variant="outlined"
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="lastName"
              variant="outlined"
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="text"
              placeholder="Enter lastName"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        </>
      ) : (
        <form onSubmit={RegisterSubmit} className="form">
          <img src={img} height="80px" width="80px" />
          <TextField
            id="outlined-basic"
            label="FirstName"
            variant="outlined"
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="lastName"
            variant="outlined"
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="text"
            placeholder="Enter lastName"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
      )}
    </div>
  );
};

export default Register;
