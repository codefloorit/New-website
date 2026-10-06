// Server entry used only at build time by scripts/prerender.mjs.
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App, { preloadPage } from "./App.jsx";

export { routes, getSeo, headTags } from "./seo";
export { siteConfig } from "./data/siteConfig";
export { itServices } from "./data/itServices";
export { projects } from "./data/projects";
export { blogPosts } from "./data/blogPosts";

// The page chunk is loaded before rendering so nothing suspends. A suspended
// route would be serialized in React's streaming format (content in a hidden
// element, moved into place by a script), which crawlers that do not run
// JavaScript cannot read and which shifts the layout on load.
export const render = async (url) => {
  await preloadPage(url);
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
};
