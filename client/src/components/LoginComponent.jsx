import React,{ useState } from 'react';
import NavbarComponent from "./NavbarComponent";
import userService from "../services/userService";

export default function LoginComponent() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async(event)=>{
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const result = await userService.login(formData);
    console.log(result)
    if(result.data.success === true) {
      alert("login successful")
    }
    else{
      alert("something went wrong")
    }
  }

  return (
    <div>
      <NavbarComponent/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
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
          <label for="exampleInputPassword1">Password</label>
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
    </div>
  )
}
