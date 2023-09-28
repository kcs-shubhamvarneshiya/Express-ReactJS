import React, { useState } from "react";
import NavbarComponent from "../../components/User/NavbarComponent";
import userService from "../../services/userService";
import { isAxiosError } from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "../../stylesheets/App.css";

const AUTO_HIDE_DURATION = 2000;

export default function LoginComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("fa-regular fa-eye-slash");
  const [type, setType] = useState("password");
  const [resType, setResType] = useState("error");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSnackbar = (message, type = "error") => {
    setMessage(message);
    setResType(type);
    setOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await userService.login(formData);
      handleSnackbar(result.data.Message, "success");
    } catch (error) {
      const err = isAxiosError(error);
      if (err) {
        if (error.message === "Network Error") {
          handleSnackbar("Server is not responding");
        } else {
          handleSnackbar(String(error?.response?.data?.msg));
        }
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const togglePasswordVisibility = () => {
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="password-toggle">
                    <span onClick={togglePasswordVisibility}>
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
