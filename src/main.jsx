import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App, { preloadPage } from "./App.jsx";

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
// the dev server serves an empty root. The current page's chunk is loaded
// first so hydration matches the prerendered HTML in one pass.
const root = document.getElementById("root");
preloadPage(window.location.pathname)
  .catch(() => {}) // a failed chunk load still leaves the prerendered HTML usable
  .then(() => {
    if (root.hasChildNodes()) hydrateRoot(root, app);
    else createRoot(root).render(app);
  });
