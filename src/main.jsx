import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<div>Products page</div>}/>
        <Route path="/cart" element={<div>Cart page</div>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
