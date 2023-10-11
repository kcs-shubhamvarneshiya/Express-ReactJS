import React, { useState, useEffect } from "react";
import AdminNavbarComponent from "./AdminNavbarComponent";
import categoryService from "../../services/category-service";
import { isAxiosError } from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import productService from "../../services/product-service";
import { errorHandler } from "../../helper/handler";
import "../../stylesheets/App.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

export default function AddProductComponent() {
  
  const [isDisabled, setIsDisabled] = useState(false);
  const [resp, setResp] = useState("");
  const [data, setData] = useState("");
  const [resType, setResType] = useState("error");
  const [open, setOpen] = useState(false);

  const [inputList, setInputList] = useState([
    {
      input: "",
      input_rank: null
    }
  ])

  const fetchCategory = async () => {
    try {
      const res = await categoryService.getCategory();
      setData(res.Data);
    } catch (error) {
      const err = errorHandler(error);
      setResType("error");
      setResp(err);
      setOpen(true);
    }
  };

  useEffect(() => {
    fetchCategory();
    if (inputList.length > 0) {
      inputList[inputList.length - 1].input === ""
        ? setIsDisabled(true)
        : setIsDisabled(false)
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      const result = await productService.insertProduct(formData);
      console.log(result);

    } catch (error) {
      if (isAxiosError(error)) {
        setResType("error");
        setResp(error.response.data.msg);
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

  const handleRemove = (index) => {
    const newList = [...inputList]
    newList.splice(index, 1)
    setInputList(newList)
  };

  const handleInputChange = (event,index) => {
    const { value } = event.target
    const newInputList = [...inputList]
    newInputList[index].input = value
    newInputList[index].input_rank = index + 1
    setInputList(newInputList)
  };

  const handleAdd = () => {
    setInputList([
      ...inputList,
      {
        input: "",
        input_rank: null
      }
    ])
  };

  const onSelectHandler = (event) => {
    console.log("values : ", event.target.value);
  };

  console.log(inputList)

  return (
    <>
      <div className="insert-product">
        <div className="product-container">
          <form onSubmit={handleSubmit}>

            {/**start*/}
            <div className="product-sub-container">
              
              {/*Heading start*/}
              <div className="product-heading">
                <p>
                  Network <span>*</span>
                </p>
              </div>
              {/*Heading end*/}

              <div className="product-suv-heading-container">
                <div className="product-sub-heading">
                  <p>Technology</p>
                </div>

                {inputList.length > 0 ? inputList.map((input, index) => (
                  <div key={index}>
                  <div className="product-input-form">
                  <TextField
                  id="outlined-basic"
                    name="networkName"
                    variant="outlined"
                    label={`Technology ${index+1}`}
                    onChange={(event) => handleInputChange(event,index)}
                  />
                  <button onClick={() => handleRemove()}>
                    <CloseIcon />
                  </button>
                  </div>
                  </div>))
                  : "No item in the list "}

                  
                <div className="product-add-textbox-button">
                  <button onClick={handleAdd} disabled={isDisabled}><AddIcon/></button>
                </div>

            </div>
             {/**End**/}       
            <div className="form-submit">
              <button>submit</button>
            </div>
        </div>
          </form>
        </div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity={resType}
          >
            {resp}
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
}
