import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0ProviderWithNavigate } from "@/auth";
import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from "@/routes";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithNavigate>
        <MainRoutes />
      </Auth0ProviderWithNavigate>
    </Router>
  </React.StrictMode>
);
