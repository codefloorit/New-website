import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Links shared before the move away from hash routing looked like /#/about.
if (window.location.hash.startsWith("#/")) {
  window.location.replace(window.location.hash.slice(1));
}

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Production pages are prerendered (scripts/prerender.mjs), so hydrate them;
// the dev server serves an empty root.
const root = document.getElementById("root");
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
