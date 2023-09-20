import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowComponent from "./components/ShowComponent"
import LoginComponent from "./components/LoginComponent";
import DemoComponent from "./components/DemoComponent";
import { RegisterComponent } from "./components/RegisterComponent";

export default function Index() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/login" element = {<LoginComponent/>}/>
        <Route path="/show" element={<ShowComponent/>}/>
        <Route path="/register" element={<RegisterComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>
);

reportWebVitals();
