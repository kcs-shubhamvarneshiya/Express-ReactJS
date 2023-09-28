import React, { useState, useEffect } from "react";
import AdminNavbarComponent from "../admin/AdminNavbarComponent";
import categoryService from "../../services/categoryService";
import { isAxiosError } from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function AddProductComponent() {
  const [productName, setProductName] = useState("");
  const [productVarient, setProductVarient] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productCamera, setProductCamera] = useState("");
  const [productProcessor, setProductProcessor] = useState("");
  const [productScreen, setProductScreen] = useState("");
  const [productFrontImage, setProductFrontImage] = useState("");
  const [productSideImage, setProductSideImage] = useState("");
  const [productBackImage, setProductBackImage] = useState("");
  const [category, setCategory] = useState("");
  const [resp, setResp] = useState("");
  const [data, setData] = useState("");
  const [resType, setResType] = useState("error");
  const [open, setOpen] = useState(false);

  const fetchCategory = async () => {
    try {
      const res = await categoryService.getCategory();
      setData(res.Data);
    } catch (error) {
      setResType("error");
      setResp(error.response.data.msg);
      setOpen(true);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      const formData = new FormData();
      formData.append("")
      formData.append("")
      formData.append("")
      formData.append("")
      formData.append("")
      formData.append("")


    } catch (error) {
      if(isAxiosError(error)){
        setResType("error");
        setResp(error.response.data.msg)
        setOpen(true)
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSelectHandler = () => {};

  return (
    <>
      <AdminNavbarComponent />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              type="text"
              name="productName"
              onChange={(event) => {
                setProductName(event.target.value);
              }}
              required
            />
            
          </div>

          <div className="">
            <input
              type="text"
              name="productVarient"
              onChange={(event) => {
                setProductVarient(event.target.value);
              }}
            />
          </div>

          <div className="">
            <input
              type="text"
              name="productColor"
              onChange={(event) => {
                setProductColor(event.target.value);
              }}
            />
          </div>

          <div className="">
            <input
              type="text"
              name="productCamera"
              onChange={(event) => {
                setProductCamera(event.target.value);
              }}
            />
          </div>

          <div className="">
            <input
              type="text"
              name="productProcessor"
              onChange={(event) => {
                setProductProcessor(event.target.value);
              }}
            />
          </div>

          <div className="">
            <input
              type="text"
              name="productScreen"
              onChange={(event) => {
                setProductScreen(event.target.value);
              }}
            />
          </div>

          <div className="">
            <input
              type="file"
              name="productFrontImage"
              onChange={(event) => {
                setProductFrontImage(event.target.value);
              }}
            />
          </div>

          <div className="">
            <input
              type="file"
              name="productSideImage"
              onChange={(event) => {
                setProductSideImage(event.target.value);
              }}
            />
          </div>

          <div className="">
            <input
              type="file"
              name="productBackImage"
              onChange={(event) => {
                setProductBackImage(event.target.value);
              }}
            />
          </div>

          <div>
            <select onChange={onSelectHandler}>
              <option>Please Select one category</option>
              {data.map((data) => (
                <option key={data._id}>{data.categoryName}</option>
              ))}
            </select>
          </div>

          <button>submit</button>
        </form>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
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
