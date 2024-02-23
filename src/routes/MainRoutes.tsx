import { Layout } from "@/layouts";
import { AuthCallbackPage, HomePage, UserProfilePage } from "@/pages";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/routes";

export const MainRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/user-profile" element={<UserProfilePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);
