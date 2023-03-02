import React from "react";
import Body from "../ConcessionsPages/Body";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../Components/navbar/NavBar";
import Header from "../ConcessionsPages/Header";


function Movies() {
  return (
    <div>
      <Navbar>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default Movies;
