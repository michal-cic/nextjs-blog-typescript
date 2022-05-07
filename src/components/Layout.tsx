import { ReactNode } from "react";
import { Alert } from "./Alert";
import { Footer } from "./Footer";
import { Meta } from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export { Layout };
export type { LayoutProps };
