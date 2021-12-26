import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ThemeProvider, createTheme } from "@mui/material";
import useThemeContext from "@theme/hooks/useThemeContext";
import HeroBanner from "../components/HeroBanner";
import AboutMe from "../components/AboutMe";
import SocialLinks from "../components/SocialLinks";

const Page = () => {
  const { isDarkTheme } = useThemeContext();
  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <HeroBanner />
      <AboutMe />
      <SocialLinks />
    </ThemeProvider>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <Page />
    </Layout>
  );
}
