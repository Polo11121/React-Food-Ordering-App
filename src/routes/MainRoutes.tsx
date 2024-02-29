import { Layout } from "@/layouts";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/routes";
import { lazyLoad } from "@/lib/lazyLoad";

const HomePage = lazyLoad("HomePage");
const AuthCallbackPage = lazyLoad("AuthCallbackPage");
const SearchPage = lazyLoad("SearchPage");
const UserProfilePage = lazyLoad("UserProfilePage");
const ManageRestaurantPage = lazyLoad("ManageRestaurantPage");

export const MainRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/search/:city" element={<SearchPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/manage-restaurant" element={<ManageRestaurantPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);
