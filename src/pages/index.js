import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { Grid, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Translate, { translate } from "@docusaurus/Translate";

function Header() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Grid container spacing={2} className={styles.heroBanner}>
      <img src={useBaseUrl("img/header.png")} className={styles.heroHeader} />
    </Grid>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Header />
    </Layout>
  );
}
