import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Translate from "@docusaurus/Translate";
import styles from "./Education.module.css";
import { Grid, Typography, Button } from "@mui/material";
import { Controller, Scene } from "react-scrollmagic";

const education = [
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
function Education() {
  const [value, setValue] = useState(0);
  const { company, position, date, desc } = education[value];

  return (
    <section className={styles.education}>
      <Controller>
        <Scene pin={true} duration={1000} triggerHook="onCenter">
          <div className="sticky">
            <h2 className={styles.educationTitle} data-aos="fade-up">
              <Translate>Education</Translate>
            </h2>
          </div>
        </Scene>
        {education.map((item, index) => {
          return (
            <Scene
              duration={1000}
              offset={180}
              pin={true}
              triggerHook="onCenter"
            >
              <div className="sticky">
                <Grid
                  container
                  spacing={2}
                  className={styles.educationItem}
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
                    className={styles.educationItemHeader}
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
              </div>
            </Scene>
          );
        })}
      </Controller>
    </section>
  );
}

export default Education;
