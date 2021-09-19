import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import { Grid, Typography, Button } from "@mui/material";
import { useTrail, animated, useSpring } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Separator from "../components/Separator";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import AOS from "aos";
import "aos/dist/aos.css";

import Translate, { translate } from "@docusaurus/Translate";

function SocialLinks({ animatedProps, ...props }) {
  return (
    <animated.div className="social__links" style={animatedProps}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography display={"inline"} gutterBottom>
            Social Media:
          </Typography>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/in/alex-borbolla/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://github.com/dalexhd">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Grid>
      </Grid>
    </animated.div>
  );
}

function Header() {
  const { siteConfig } = useDocusaurusContext();
  const animatedHero = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(8em)" },
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 600
  });

  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460
    },
    delay: 200
  });

  return (
    <Grid container spacing={2} className={styles.heroBanner}>
      <animated.img
        src={useBaseUrl("img/header.png")}
        className={styles.heroHeader}
        style={animatedHero}
      />
      <Grid item xs={12} lg={6}>
        <animated.div style={animatedTexts[0]}>
          <Typography variant="h2" gutterBottom>
            <Translate>Lorem, ipsum.</Translate>
            <span className="intro__name"> {siteConfig.title}</span>
          </Typography>
        </animated.div>
        <animated.div style={animatedTexts[1]}>
          <Typography variant="body1">
            <Translate>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              architecto maxime perspiciatis mollitia accusantium dolore
              necessitatibus deleniti ab nostrum vel.
            </Translate>{" "}
          </Typography>
        </animated.div>
        &nbsp;
        <animated.div style={animatedTexts[2]}>
          <Typography variant="h6" gutterBottom>
            <Translate>My Skills:</Translate>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            facilis.
          </Typography>
        </animated.div>
        <animated.p style={animatedTexts[3]}>
          <Button
            style={{ textTransform: "none" }}
            color="primary"
            variant="outlined"
            size="small"
          >
            <Translate>My Resume</Translate>
          </Button>
        </animated.p>
        <SocialLinks animatedProps={animatedTexts[4]} />
      </Grid>
      <Grid item xs={12} lg={6} />
    </Grid>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      AOS.init();
    }
  }, [ExecutionEnvironment.canUseDOM]);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Header />
      <main>
        <Separator />
        <Education />
        <Separator />
        {/* <Skills /> */}
      </main>
    </Layout>
  );
}
