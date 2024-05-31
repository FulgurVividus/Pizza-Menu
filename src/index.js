// index.js, it's really needs to be called index.js cause webpack expects the entry point to be called index.js

import React from "react";
import ReactDOM from "react-dom/client";

// Components always must start from the capital letter
function App() {
  return <h1>Hello React!</h1>;
}

// Render our App in the DOM (in v.18)
const root = ReactDOM.createRoot(document.getElementById("root"));
// StrictMode, during development it'll render our components twice to find certain bugs and will check for outdated parts of React APIs
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
