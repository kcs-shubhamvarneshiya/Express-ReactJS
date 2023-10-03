import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowComponent from "./components/User/ShowComponent";
import LoginComponent from "./pages/user/LoginComponent";
import { RegisterComponent } from "./pages/user/RegisterComponent";
import ProductComponent from "./pages/user/ProductComponent";
import AboutComponent from "./pages/user/AboutComponent";
import MainComponent from "./pages/admin/MainComponent";
import CategoryComponent from "./pages/admin/CategoryComponent";

export default function Index() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/show" element={<ShowComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/admin" element={<MainComponent/>}/>
        <Route path="/product" element={<ProductComponent/>}/>
        <Route path="/about" element={<AboutComponent/>}/>
        <Route path="/category" element={<CategoryComponent/>}/>
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


