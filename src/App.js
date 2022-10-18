import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/home";
import Signup from "./components/Pages/signup";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </div>
    );
  }
}

export default App;
