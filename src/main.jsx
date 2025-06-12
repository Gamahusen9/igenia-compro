import React from "react"
import "./i18n";
import ReactDOM from "react-dom/client"
import { BrowserRouter, useRoutes, useLocation } from "react-router-dom";
import "./index.css"
import "./style/variables.css"
import "@fontsource/poppins/latin.css"
import "aos/dist/aos.css";
import AOS from "aos";
import { RouterConfig } from "./routes/RouterConfig";


// ScrollToTop component to reset scroll position on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// eslint-disable-next-line react-refresh/only-export-components
function RoutesWrapper() {
  const element = useRoutes(RouterConfig);
  return element;
}

AOS.init();

// Use a more resilient pattern for creating root to prevent issues with hot reloading
const rootElement = document.getElementById("root");
// Clear any existing content
if (rootElement._reactRootContainer) {
  rootElement._reactRootContainer = null;
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <RoutesWrapper />
    </BrowserRouter>
  </React.StrictMode>
)
