import React, { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import { Container, Nav } from "./Layout.styled";

import _ from "lodash";

type MainLayoutProps = {
  children: ReactNode;
  searchbar: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, searchbar }) => {
  return (
    <div style={{ display: "flex", flexFlow: "column", height: "100%" }}>
      <Nav>{searchbar}</Nav>
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
