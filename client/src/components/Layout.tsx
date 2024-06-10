import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";
import Navbar from "./Navbar";

const Layout = ({ children, cln }: PropsWithChildren & { cln?: string }) => {
  return (
    <div className="bg-black relative text-white w-screen overflow-hidden h-screen">
      <Navbar />
      <div className={cn("w-full mt-60", cln)}>{children}</div>
    </div>
  );
};

export default Layout;
