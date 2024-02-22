import { Layout } from "@/layouts";
import { AuthCallbackPage, HomePage, UserProfilePage } from "@/pages";
import { Routes, Route, Navigate } from "react-router-dom";

export const MainRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />}  />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/user-profile" element={<UserProfilePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);
