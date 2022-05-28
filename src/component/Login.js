import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {signin} from '../redux/actions/userAction'
import { Button} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {Alert,AlertTitle} from '@mui/material';
import {Link} from'react-router-dom'
import img from "../assest/man.png";
import { useNavigate } from "react-router-dom";
import "../style/style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const userSignin=useSelector((state)=>state.userSignin);
  const {userInfo,loading,error}=userSignin;
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      //   navigate('/')
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signin(email,password))
  }

  return (
    <div>
    {(error ?(
<>
      <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  This is an error alert — <strong>{error}</strong>
</Alert>
<form onSubmit={handleSubmit} className="form">
    <img src={img} height="80px" width="80px" />
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
    Aready have an account? <Link to="/register">Sign up</Link>
  </form>
  </>
    ):( <form onSubmit={handleSubmit} className="form">
    <img src={img} height="80px" width="80px" />
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
   <div> Aready have an account? <Link to="/register">Sign up</Link></div>
  </form>)
   
    )}
    </div>
  );
};

export default Login;
