import React from "react";
import logo from "./logo.svg";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
// import "./App.css";
import "./style/App.scss"
import { Random } from "./pages/random/Random";
import { Setting } from "./pages/setting/Setting";
import { Fill } from "./pages/fill/Fill";
import { Header } from "./component/layouts/header/Header";

function App() {
  return (
    <div id="app">
      <Header />
      <div className="context">
        <Routes>
          <Route path="/" element={<Fill />} />
          <Route path="random" element={<Random />} />
          <Route path="setting" element={<Setting />} />
          <Route path="*" element={<Navigate to="random" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
