import { PropsWithChildren } from "react";
import { Header, Hero, Footer } from "@/components";

export const Layout = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Hero />
    <div className="container flex-1 py-10">{children}</div>
    <Footer />
  </div>
);
