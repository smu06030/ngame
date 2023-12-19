import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/fonts/font.css"
import App from "./App";
import GlobalStyle from "./fonts/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import MainProvider from "./components/store/MainProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <GlobalStyle />
    <MainProvider>
      <App />
    </MainProvider>
  </React.Fragment>
);


reportWebVitals();
