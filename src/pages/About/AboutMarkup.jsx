import style from "./About.module.scss";
// import { motion } from 'framer-motion';
// import { useState } from 'react';
import laptop from "../../images/laptop.png";
import { ExperienceSlide } from "../../components/Slides/ExperienceSlide/ExperienceSlide";
import { SkillsSlide } from "../../components/Slides/SkillsSlide/SkillsSlide";
import { AboutSlide } from "../../components/Slides/AboutSlide/AboutSlide";
import { EducationSlide } from "../../components/Slides/EducationSlide/EducationSlide";

export function AboutMarkup({ number, title, text, currentSlide }) {

  return (
    <>
      <div className={style.imgSlidesWrapper}>
        <>
          {number === 1 && <AboutSlide title={title} text={text} />}
          {number === 2 && (
            <SkillsSlide title={title} titleStyle={style.slideTitle} />
          )}
          {number === 3 && <ExperienceSlide title={title} text={text} />}
          {number === 4 && <EducationSlide title={title} text={text} />} 
          <img
            src={laptop}
            alt="laptop"
            width={506}
            className={style.laptopImage}
          />
        </>
      </div>
    </>
  );
}
