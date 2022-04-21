import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/header";
import ConfigRoute from "./ConfigRoutes/ConfigRoute";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="font-sans bg-primary box-border px-20"
        style={{ minHeight: "100vh" }}
      >
        <Navbar />
        <div className="container mx-auto ">
          <ConfigRoute />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
