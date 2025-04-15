import React from "react"; 
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Components/LoginVoter";
import Register from "./Pages/Register";
import AdminModule from "./Components/AdminModule";
import Candidates from "./Components/Candidates";
import Voters from "./Components/Voters";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminModule />} />
        <Route path="/Candidates" element={<Candidates />} />
        <Route path="/Voters" element={<Voters />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
