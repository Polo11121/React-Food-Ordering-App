import { Layout } from "@/layouts";
import { AuthCallbackPage, HomePage } from "@/pages";
import { Routes, Route, Navigate } from "react-router-dom";

export const MainRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <HomePage />
        </Layout>
      }
    />
    <Route path="/auth-callback" element={<AuthCallbackPage />} />
    <Route path="/user-profile" />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
