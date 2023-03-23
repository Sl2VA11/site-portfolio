import { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import style from '../../../pages/About/About.module.scss';
import { motion } from 'framer-motion';
import dropDownIcon from '../../../images/icons/drop-down.svg';
import handleScroll from "../../../helpers/handleScroll";
import { NavFooter } from "../../NavFooter/NavFooter";

export function ExperienceSlide({ title, text }) {
  const [isDropDown, setIsDropDown] = useState(false);
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
    <>
      <motion.div
        className={style.slideWrapper}
        initial={{ opacity: 0, transition: { duration: 2 } }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
      >
        <h1 className={style.slideTitle}>{title}</h1>

        <p className={`${style.slideText} ${style.thirdSlideText}`}>{text}</p>
        <p
          className={`${style.slideText} ${style.thirdSlideText}`}
          style={{ marginBottom: '40px' }}
        >
          2022 - present
        </p>

        {isDropDown && (
          <motion.div
            className={style.slideDropDownTextWrapper}
            initial={{ opacity: 0, transition: { duration: 2 } }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
          >
            <span className={style.slideDropDownText}>
              Implementing new features according to client’s requirements
            </span>
            <span className={style.slideDropDownText}>
              Help colleagues with less experience
            </span>
            <span className={style.slideDropDownText}>
              Creating a new website,pages
            </span>

            <span className={style.slideDropDownText}>Refactoring code</span>
            <span className={style.slideDropDownText}>Bug fixing</span>
            <span className={style.slideDropDownText}>Daily call</span>
          </motion.div>
        )}
        <ReactSVG
          src={dropDownIcon}
          className={`${style.slideDropDownIcon} ${
            isDropDown ? style.slideDropDownIconUp : ''
          }`}
          onClick={() => setIsDropDown(prev => !prev)}
        />
      </motion.div>

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
    </>
  );
}
