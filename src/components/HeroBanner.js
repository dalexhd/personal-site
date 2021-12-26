import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./HeroBanner.module.css";
import { Grid, Typography, Box } from "@mui/material";
import Typical from "react-typical";
import Translate, { translate } from "@docusaurus/Translate";

export default function HeroBanner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Grid container className={styles.heroBanner}>
      <Box
        className={styles.heroHeader}
        sx={{ display: { xs: "none", sm: "block" } }}
      ></Box>
      <Grid item xs={12} lg={4} className={styles.heroTitle}>
        <Typography variant="h2">
          <Typical
            className={styles.typical}
            steps={[
              translate({
                message: "Wellcome to\nmy personal\nblog."
              }),
              1000,
              translate({
                message: "Wellcome to\nmy personal\nwebsite."
              }),
              300
            ]}
            wrapper="p"
          />
        </Typography>
      </Grid>
    </Grid>
  );
}
