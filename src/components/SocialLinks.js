import React, { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./SocialLinks.module.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
  faTwitter,
  faTelegram,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import Translate, { translate } from "@docusaurus/Translate";

export default function SocialLinks() {
  return (
    <Grid container className={styles.socialLinks}>
      <Grid item xs={12} lg={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">
            <Translate>Social Media</Translate>
          </Typography>
          <Box my={2} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item>
              <a
                href="https://discordapp.com/users/199913047203119104"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={faDiscord} />
              </a>
            </Grid>
            <Grid item ml={2}>
              <a
                href="https://twitter.com/DalexHDYT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={faTwitter} />
              </a>
            </Grid>
            <Grid item ml={2}>
              <a
                href="https://www.linkedin.com/in/alex-borbolla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={faLinkedin} />
              </a>
            </Grid>
            <Grid item ml={2}>
              <a
                href="https://t.me/dalexhd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={faTelegram} />
              </a>
            </Grid>
            <Grid item ml={2}>
              <a
                href="https://www.instagram.com/borbolla99/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={faInstagram} />
              </a>
            </Grid>
            <Grid item ml={2}>
              <a
                href="https://github.com/dalexhd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={faGithub} />
              </a>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
