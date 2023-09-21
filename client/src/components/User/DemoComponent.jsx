import React,{useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import NavbarComponent from "./NavbarComponent";
import userService from "../../services/userService";
import { isAxiosError } from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function DemoComponent() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [open,setOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

    } catch (error) {
        
    }
  };

  return (
    <>
      <NavbarComponent />
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <TextField
            type="text"
            variant="standard"
            onChange={(event)=>{setEmail(event.target.value)}}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <TextField
            type="text"
            variant="standard"
            onChange={(event)=>{setPassword(event.target.value)}}
          />
        </FormControl>
        <Button  variant="outlined" color="secondary" type="submit">Submit</Button>
      </form>
    </>
  );
}
