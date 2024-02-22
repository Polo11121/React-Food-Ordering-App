import { Header, Hero, Footer } from "@/components";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {isMainPage && <Hero />}
      <div className="container flex-1 py-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
