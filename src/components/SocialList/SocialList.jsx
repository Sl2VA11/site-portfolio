import { ReactSVG } from 'react-svg';
import style from './SocialList.module.scss';
import linkedin from '../../images/icons/social-list/linkedin.svg';
import github from '../../images/icons/social-list/github.svg';
import telegram from '../../images/icons/social-list/telegram.svg';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

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

export function SocialList() {
  return (
    <ul className={style.socialList}>
      <motion.li
        className={style.socialItem}
        custom={0}
        initial="hidden"
        animate="visible"
        variants={listItemVariants}
      >
        <a
          href="https://www.linkedin.com/in/vyacheslav-grobovoy/"
          className={style.socialLink}
        >
          <ReactSVG src={linkedin} className={style.socialIcon} />
        </a>
      </motion.li>
      <motion.li
        className={style.socialItem}
        custom={1}
        initial="hidden"
        animate="visible"
        variants={listItemVariants}
      >
        <a href="https://t.me/sl2va_2" className={style.socialLink}>
          <ReactSVG src={telegram} className={style.socialIcon} />
        </a>
      </motion.li>
      <motion.li
        className={style.socialItem}
        custom={2}
        initial="hidden"
        animate="visible"
        variants={listItemVariants}
      >
        <a href="https://github.com/Sl2VA11" className={style.socialLink}>
          <ReactSVG src={github} className={style.socialIcon} />
        </a>
      </motion.li>
      <motion.li
        className={style.socialItem}
        custom={3}
        initial="hidden"
        animate="visible"
        variants={listItemVariants}
      >
        <a
          href="mailto:vyacheslav.grobovoy.forwork@gmail.com"
          className={style.socialLink}
        >
          <MdEmail className={style.socialIconEmail} />
        </a>
      </motion.li>
    </ul>
  );
}