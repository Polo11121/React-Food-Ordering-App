import { PropsWithChildren } from "react";
import { Header } from "@/components";

export const Layout = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="container flex-1 py-10">{children}</div>
  </div>
);
