import { NavFooter } from '../../components/NavFooter/NavFooter';
import { Rain } from '../../components/Rain/Rain';
import style from './Main.module.scss';
import { motion } from 'framer-motion';

export function Main() {
  return (
    <div className={style.mainWrapper}>
      <div id="Rain">
        <Rain />
      </div>

      <main className={style.mainSection}>
        <div className={style.mainTextWrapper}>
          <motion.span
            className={`${style.mainTitle} ${style.mainTitleFirstName}`}
            initial={{ opacity: 0, transition: { duration: 2 } }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
          >
            Vyacheslav
          </motion.span>
          <p className={style.mainText}>
            <span>F</span>
            <span>r</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>-</span>
            <span>e</span>
            <span>n</span>
            <span style={{ marginRight: '15px' }}>d</span>
            <span>d</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </p>
          <motion.span
            className={`${style.mainTitle} ${style.mainTitleSecondName}`}
            initial={{ opacity: 0, transition: { duration: 2 } }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
          >
            Grobovoy
          </motion.span>
        </div>
      </main>

      <NavFooter isVisibleSocial={true} footerStyle={style.mainFooter} />
    </div>
  );
}
