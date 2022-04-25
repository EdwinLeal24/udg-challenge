import Head from "next/head";
import { LayoutContainer, Main } from "./Layout.styles";
import { Header, Footer } from "@components/index";

export const Layout = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </LayoutContainer>
    </>
  );
};
