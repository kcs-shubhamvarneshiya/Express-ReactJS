import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import userService from "../../services/userService";
import { isAxiosError } from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "../../stylesheets/App.css";

const AUTO_HIDE_DURATION = 2000;

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("fa-regular fa-eye-slash");
  const [type, setType] = useState("password");
  const [resType, setResType] = useState("error");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const result = await userService.login(formData);
      setResType("success");
      setMessage(result.data.Message);
      setOpen(true);
    } catch (error) {
      const err = isAxiosError(error);
      if (err) {
        setResType("error");
        setMessage(String(error?.response?.data?.msg));
        setOpen(true);
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const pswToggle = () => {
    if (type === "password") {
      setIcon("fa-regular fa-eye");
      setType("text");
    } else {
      setIcon("fa-regular fa-eye-slash");
      setType("password");
    }
  };

  return (
    <>
      <NavbarComponent color="black" bgcolor="white" />
      <div className="model" id="loginModal">
        <div className="loginContainer">
          <img src="svg/loginWave.svg" alt="" />
          <div className="login-sub-container">
            <div className="form-header">
              <h3>SignIn</h3>
            </div>
            <form onSubmit={handleSubmit} className="modal-content animate">
              <div className="container">
                <div className="form-field-box">
                  <div className="password-toggle">
                    <input
                      type="text"
                      placeholder="Enter Email"
                      name="uname"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                </div>
                <br />
                <div className="form-field-box">
                  <div className="password-toggle">
                    <input
                      type={type}
                      placeholder="Enter Password"
                      name="psw"
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>
                  <div className="password-toggle">
                    <span onClick={pswToggle}>
                      <i className={icon}></i>
                    </span>
                  </div>
                </div>
                <br />
                <div className="form-field-button">
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
          <div className="form-field-extra">
            <p>
              <a href="/">Forgot password?</a>
            </p>
            <p>
              New on the site? <a href="/register">Sign Up</a>
            </p>
          </div>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={AUTO_HIDE_DURATION}
          onClose={handleClose}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity={resType}
          >
            {message}
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
}
