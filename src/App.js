import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./component/Home";
import Footer from "./component/Footer";
import AboutUs from "./component/AboutUs";




export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}