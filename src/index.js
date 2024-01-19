import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";
import "./styles.css";
import "../src/App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
    <div className="container">
      <Weather defaultCity="New York" />
      <div>
      <p>This project was coded by <a href="https://mikaela-lammers-developer.netlify.app/">Mikaela Lammers</a> and is <a href="https://github.com/Mik0402/weather-react">open-sourced on GitHub</a> and <a href="https://app.netlify.com/sites/playful-pony-01d4de/deploys">hosted on Netlify.</a></p>
      </div>
    </div>
    </div>
  </StrictMode>
);
