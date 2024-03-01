import { Header, Hero, Footer, LoadingScreen } from "@/components";
import { useAuth0 } from "@auth0/auth0-react";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const { isLoading } = useAuth0();
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Suspense fallback={<LoadingScreen />}>
        {isMainPage && <Hero />}
        <div className="container py-10 flex flex-col flex-1">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};
