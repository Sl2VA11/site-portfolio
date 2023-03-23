import style from '../../../pages/About/About.module.scss';
import { motion } from 'framer-motion';
import { NavFooter } from "../../NavFooter/NavFooter";


export function EducationSlide({ title, text }) {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <motion.div
        initial={{ opacity: 0, transition: { duration: 2 } }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        className={style.slideThirdWrapper}
      >
        <h1 className={style.slideTitle}>{title}</h1>

        <p className={`${style.slideText} ${style.thirdSlideText}`}>{text}</p>
        <p className={`${style.slideText}`}>2021 - 2022</p>
      </motion.div>

      <NavFooter isVisibleSocial={true} footerStyle={style.aboutFooter }/>
    </div>
  );
}
