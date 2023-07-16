
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./component/Home";
import Footer from "./component/Footer";





export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}