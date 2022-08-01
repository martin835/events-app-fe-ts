import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import HomePage from "./views/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MyHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
