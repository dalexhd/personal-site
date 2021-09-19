// @flow
import React, { useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Grid, Typography, Button } from "@mui/material";

import styles from "./Skills.module.css";
import Translate from "@docusaurus/Translate";

const skills = [
  {
    company: "Lorem, ipsum.",
    position: "Lorem ipsum dolor sit amet.",
    date: "Lorem ipsum dolor sit.",
    desc: {
      1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur sed deleniti odio sapiente facere dignissimos ipsam",
      2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur sed deleniti odio sapiente facere dignissimos ipsam",
      3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur sed deleniti odio sapiente facere dignissimos ipsam"
    }
  },
  {
    company: "Lorem, ipsum.",
    position: "Lorem ipsum dolor sit amet.",
    date: "Lorem ipsum dolor sit.",
    desc: {
      1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur sed deleniti odio sapiente facere dignissimos ipsam",
      2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur sed deleniti odio sapiente facere dignissimos ipsam",
      3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur sed deleniti odio sapiente facere dignissimos ipsam"
    }
  },
  {
    company: "Lorem, ipsum.",
    position: "Lorem ipsum dolor sit amet.",
    date: "Lorem ipsum dolor sit.",
    desc: {
      1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur sed deleniti odio sapiente facere dignissimos ipsam",
      2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur sed deleniti odio sapiente facere dignissimos ipsam",
      3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur sed deleniti odio sapiente facere dignissimos ipsam"
    }
  }
];

const Skills = () => {
  const [value, setValue] = useState(0);
  const { company, position, date, desc } = skills[value];
  return (
    <section className={styles.skills}>
      <Controller>
        <Scene pin={true} duration={1000} triggerHook="onCenter">
          <div className="sticky">
            <h2 className={styles.skillsTitle} data-aos="fade-up">
              <Translate>Skills</Translate>
            </h2>
          </div>
        </Scene>
        <Scene triggerHook="onLeave" duration="300%" pin>
          <Timeline wrapper={<div id={styles.pinContainer} />}>
            {skills.map((item, index) => {
              return (
                <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
                  <Grid
                    container
                    spacing={2}
                    className={styles.skillsItem}
                    key={index}
                  >
                    {index % 2 ? (
                      <Grid item xs={12} lg={6} data-aos="fade-right">
                        Img
                      </Grid>
                    ) : null}
                    <Grid
                      item
                      xs={12}
                      lg={6}
                      data-aos={index % 2 ? "fade-left" : "fade-right"}
                      className={styles.skillsItemHeader}
                    >
                      <span>{item.company}</span>
                      {Object.keys(item.desc).map((key, index) => {
                        return <span>{desc[key]}</span>;
                      })}
                    </Grid>
                    {!(index % 2) ? (
                      <Grid item xs={12} lg={6} data-aos="fade-left">
                        Img
                      </Grid>
                    ) : null}
                  </Grid>
                </Tween>
              );
            })}
          </Timeline>
        </Scene>
      </Controller>
    </section>
  );
};

export default Skills;
