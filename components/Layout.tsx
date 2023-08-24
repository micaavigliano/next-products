import React, { ReactNode } from "react";
import Footer from "../components/Footer/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexFlow: "column", height: "100%" }}>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
