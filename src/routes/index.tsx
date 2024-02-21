import { Layout } from "@/layouts";
import { Routes, Route, Navigate } from "react-router-dom";

export const MainRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <h1>test</h1>
        </Layout>
      }
    />
    <Route path="/user-profile" />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
