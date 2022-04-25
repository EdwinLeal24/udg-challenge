import { createGlobalStyle, ThemeProvider } from "styled-components";
import { NextUIProvider } from "@nextui-org/react";
import { theme } from "../styles/theme";
import { Layout } from "@components/layout/index";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: #15141b
  }

  h1, p {
    margin: 0;
  }

  @font-face {
    font-family: "Arial";
    font-weight: 400;
    src: url("/fonts/arial/ARIAL.woff");
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </ThemeProvider>
    </>
  );
}
