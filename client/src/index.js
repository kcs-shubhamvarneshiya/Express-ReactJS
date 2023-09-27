import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowComponent from "./components/User/ShowComponent";
import LoginComponent from "./components/User/LoginComponent";
import { RegisterComponent } from "./components/User/RegisterComponent";
import AddProductComponent from "./components/admin/AddProductComponent";
import ProductComponent from "./components/User/ProductComponent";

export default function Index() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/show" element={<ShowComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/add" element={<AddProductComponent/>}/>
        <Route path="/product" element={<ProductComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

reportWebVitals();
