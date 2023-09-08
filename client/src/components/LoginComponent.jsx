import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import userService from "../services/userService";
import { isAxiosError } from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [open,setOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const result = await userService.login(formData);
     
      setMessage(result.data.Message);
      setOpen(true)
      
    } catch (error) {
      const err = isAxiosError(error);
      if (err) {
        setMessage(String(error?.response?.data?.msg));
        setOpen(true)
      }
    }

  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <NavbarComponent />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
     
      <Snackbar
        open={open}
        autoHideDuration={6000} // The duration the Snackbar will be displayed (in milliseconds)
        onClose={handleClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="error"
        >
         {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
