/*
*
*
*
authors:['Arnob Islam',....]
created date:'05-08-22'
description:'intry file of the template. contaier all initial segmets and  providers'
github:'https://github.com/mihir-kanzariya/CompanyPortfolio'

*
*
*
*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// <- ------------- css files ---------------- ->
import "antd/dist/antd.min.css";
import "react-multi-carousel/lib/styles.css";
import "./styles/style.css";
// <- ------------- css files ---------------- ->

const root = ReactDOM.createRoot(
  document.getElementById("__app__root") as HTMLElement
);
root.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>
);
