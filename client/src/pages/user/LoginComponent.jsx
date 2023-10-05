import React, { useState } from "react";
import NavbarComponent from "../../components/User/NavbarComponent";
import userService from "../../services/userService";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "../../stylesheets/App.css";
import {useNavigate} from "react-router-dom";
import {errorHandler} from "../../helper/handler"

const AUTO_HIDE_DURATION = 3000;

export default function LoginComponent() {
  const [formData, setFormData] = useState({ email: "",password: "",});
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-regular fa-eye-slash");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSnackbar = (message, type = "error") => {
    setMessage(message);
    setOpen(true);
    setType(type);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await userService.login(formData);
      const user = {
        token : result.data.Data.token,
        _id : result.data.Data._id,
        name : result.data.Data.name
      }
      localStorage.setItem("user", user);
      handleSnackbar(result.data.Message, "success");
      navigate("/");
    } catch (error) {
      const err = errorHandler(error)
      handleSnackbar(err)
    }
  };

  const togglePasswordVisibility = () => {
    setType(type === "password" ? "text" : "password");
    setIcon(type === "password" ? "fa-regular fa-eye" : "fa-regular fa-eye-slash")
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
            severity="error"
          >
            {message}
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
}
