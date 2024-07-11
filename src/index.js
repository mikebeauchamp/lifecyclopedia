import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import CyclOPediaClassPage from "./CyclOPediaClassPage";
import CyclOPediaFuncPage from "./CyclOPediaFuncPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-warning text-center">Class Component</span>
        <CyclOPediaClassPage />
      </div>
      <div className="col-6">
        <span className="h1 text-warning text-center">
          Functional Component
        </span>
        <CyclOPediaFuncPage />
      </div>
    </div>
  </div>
);
