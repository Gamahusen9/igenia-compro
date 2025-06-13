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


// ScrollToTop component to reset scroll position and update page title on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);

    // Find the current route and set the title based on the route name
    const currentRoute = RouterConfig.find(route => route.path === pathname);
    if (currentRoute) {
      const pageTitle = currentRoute.title || currentRoute.name;
      document.title = `IGENIA - ${pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}`;
    } else {
      document.title = "IGENIA";
    }
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
