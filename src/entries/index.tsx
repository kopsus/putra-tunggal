import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

function createApp(elementName: string, Element: React.ElementType) {
  return function () {
    ReactDOM.createRoot(document.getElementById(elementName)!).render(
      <React.StrictMode>
        <Element />
      </React.StrictMode>
    );
  };
}

export const mainApp = createApp("root", App);
