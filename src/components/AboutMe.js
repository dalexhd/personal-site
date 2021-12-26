import React, { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./AboutMe.module.css";
import moment from "moment";
import Translate, { translate } from "@docusaurus/Translate";

import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

export default function HeroBanner() {
  const { siteConfig } = useDocusaurusContext();

  const [time, setTime] = useState(0);

  function diffYMDHMS(date1, date2) {
    let years = date1.diff(date2, "year");
    date2.add(years, "years");
    let months = date1.diff(date2, "months");
    date2.add(months, "months");
    let days = date1.diff(date2, "days");
    date2.add(days, "days");
    let hours = date1.diff(date2, "hours");
    date2.add(hours, "hours");
    let minutes = date1.diff(date2, "minutes");
    date2.add(minutes, "minutes");
    let seconds = date1.diff(date2, "seconds");
    return { years, months, days, hours, minutes, seconds };
  }

  useEffect(() => {
    let fn = () => {
      let { years, months, days, hours, minutes, seconds } = diffYMDHMS(
        moment(),
        moment("1999-02-25 00:00")
      );
      setTime(
        `${years}y ${months}m ${days}d - ${hours}h ${minutes}min ${seconds}s`
      );
    };
    fn();
    const interval = setInterval(fn, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container className={styles.aboutMe}>
      <Grid item xs={12} lg={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">
            <Translate>About me</Translate>
          </Typography>
          <img
            src={useBaseUrl("img/avatar.jpeg")}
            className={styles.avatar}
          ></img>
          <List sx={{ width: "100%" }}>
            <ListItem sx={{ textAlign: "justify" }}>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                    ></Typography>
                    <Translate>
                      Hey 👋🏽, I'm Alejandro Borbolla, also known as DalexHD on
                      my social platforms. Here is a brief introduction about
                      me:
                    </Translate>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={translate({
                  message: "Country of birth"
                })}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                    >
                      🇧🇬 <Translate>Bulgaria</Translate>
                    </Typography>
                    {" — "}
                    <Translate>
                      I was adopted from there at the age of 3.
                    </Translate>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={translate({
                  message: "Where do I live?"
                })}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                    >
                      🇪🇸 <Translate>Spain</Translate>
                    </Typography>
                    {" — "}
                    <Translate>Currently I live in Madrid.</Translate>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={translate({
                  message: "Date of birth"
                })}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                    >
                      25-02-1999
                    </Typography>
                    {" — "}
                    <Translate>I'm</Translate>
                    {` ${time}.`}
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={translate({
                  message: "Job"
                })}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                    >
                      <Translate>Full Stack Developer</Translate>
                    </Typography>{" "}
                    — <Translate>Working fulltime at</Translate>{" "}
                    <a href="https://softpoint.es/en/" target="_blank">
                      Softpoint
                    </a>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={translate({
                  message: "Studying"
                })}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                    >
                      <Translate>Computer Science</Translate>
                    </Typography>{" "}
                    — <Translate>Studying at</Translate>{" "}
                    <a href="https://www.42madrid.com/" target="_blank">
                      <Translate>42 school</Translate>
                    </a>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
}
