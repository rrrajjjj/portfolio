import React from "react";
import { createRoot } from "react-dom/client";
import PersonalSite from "./components/PersonalSite.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersonalSite />
  </React.StrictMode>
);
