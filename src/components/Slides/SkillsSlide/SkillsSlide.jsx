import style from '../../../pages/About/About.module.scss';
import react from '../../../images/icons/skills/react.svg';
import js from '../../../images/icons/skills/js.svg';
import html from '../../../images/icons/skills/html.svg';
import css from '../../../images/icons/skills/css.svg';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';
import { NavFooter } from '../../NavFooter/NavFooter';
import { useEffect, useState } from 'react';
import handleScroll from "../../../helpers/handleScroll";

const listItemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: i => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export function SkillsSlide({ title, titleStyle }) {
  const [isVisibleNav, setIsVisibleNav] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    handleScroll(setIsVisibleNav, scrollTimeout);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  return (
    <div className={style.slideWrapper}>
      <motion.h1
        className={titleStyle}
        initial={{ opacity: 0, transition: { duration: 2 } }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
      >
        {title}
      </motion.h1>
      <ul className={style.skillsList}>
        <motion.li
          className={style.skillsItem}
          custom={0}
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
        >
          <p className={style.skillsTitle}>React</p>

          <ReactSVG src={react} />
        </motion.li>
        <motion.li
          className={style.skillsItem}
          custom={1}
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
        >
          <p className={style.skillsTitle}>JavaScript</p>
          <ReactSVG src={js} />
        </motion.li>
        <motion.li
          className={style.skillsItem}
          custom={2}
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
        >
          <p className={style.skillsTitle}>HTML</p>
          <ReactSVG src={html} />
        </motion.li>
        <motion.li
          className={style.skillsItem}
          custom={3}
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
        >
          <p className={style.skillsTitle}>CSS</p>
          <ReactSVG src={css} />
        </motion.li>
      </ul>

      {isVisibleNav && (
        <motion.div
          initial={{ opacity: 0, transition: { duration: 2 } }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0, transition: { duration: 2 } }}
        >
          <NavFooter
            isVisibleSocial={false}
            footerStyle={style.footerSlideStyle}
          />
        </motion.div>
      )}
    </div>
  );
}
