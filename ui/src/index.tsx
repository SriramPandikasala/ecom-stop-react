import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

function initalize() {
  const rootElem: HTMLElement = document.getElementById("root") as HTMLElement;

  ReactDOM.createRoot(rootElem).render(
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  );
}

initalize();
