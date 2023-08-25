import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowComponent from "./components/ShowComponent"


export default function Index() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/show" element={<ShowComponent/>}/>
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
