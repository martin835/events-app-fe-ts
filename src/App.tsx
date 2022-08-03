import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import HomePage from "./views/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import OrganizerPage from "./views/OrganizerPage";

function App() {
  return (
    <>
      <MyHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/organizer/:id" element={<OrganizerPage />} />
      </Routes>
    </>
  );
}

export default App;
