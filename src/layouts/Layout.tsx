import { Header, Hero, Footer } from "@/components";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader2 } from "lucide-react";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const { isLoading } = useAuth0();
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-20 h-20 text-orange-500 animate-spin" />
      </div>
    );
  }

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
