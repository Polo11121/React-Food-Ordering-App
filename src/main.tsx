import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0ProviderWithNavigate } from "@/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from "@/routes";
import { Toaster } from "@/components/ui";
import "./global.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
          <MainRoutes />
          <Toaster visibleToasts={1} position="top-right" className="" />
        </Auth0ProviderWithNavigate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
