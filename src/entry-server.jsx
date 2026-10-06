// Server entry used only at build time by scripts/prerender.mjs.
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

export { routes, getSeo, headTags } from "./seo";
export { siteConfig } from "./data/siteConfig";
export { itServices } from "./data/itServices";
export { projects } from "./data/projects";
export { blogPosts } from "./data/blogPosts";

export const render = (url) =>
  renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
