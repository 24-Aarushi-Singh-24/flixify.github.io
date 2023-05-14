import "./App.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";

import Home from "./pages/Home";
import NetflixShow from "./pages/NetflixShow";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/netflix-show" Component={NetflixShow} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
