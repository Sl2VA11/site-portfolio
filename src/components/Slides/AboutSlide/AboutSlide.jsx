import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import style from '../../../pages/About/About.module.scss';
import { NavFooter } from '../../NavFooter/NavFooter';
import handleScroll from '../../../helpers/handleScroll';

export function AboutSlide({title, text }) {
  const [isDropDownText, setIsDropDownText] = useState(false);
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
         className={style.slideTitle}
         initial={{ opacity: 0, transition: { duration: 2 } }}
         animate={{ opacity: 1, transition: { duration: 2 } }}
         exit={{ opacity: 0, transition: { duration: 2 } }}
       >
         {title}
       </motion.h1>
       <motion.p
         className={`${style.slideText}`}
         initial={{ opacity: 0, transition: { duration: 2 } }}
         animate={{ opacity: 1, transition: { duration: 2 } }}
         exit={{ opacity: 0, transition: { duration: 2 } }}
       >
         {text}{' '}
         {!isDropDownText && (
           <span
             onClick={() => setIsDropDownText(prev => !prev)}
             style={{ cursor: 'pointer' }}
           >
             ...
           </span>
         )}
         {isDropDownText && (
           <motion.span
             initial={{ opacity: 0, transition: { duration: 2 } }}
             animate={{ opacity: 1, transition: { duration: 2 } }}
             exit={{ opacity: 0, transition: { duration: 2 } }}
           >
             site performance, ensure cross-browser compatibility, and possess
             excellent troubleshooting skills. I'm a motivated professional who
             stays up-to-date with industry trends and best practices.
           </motion.span>
         )}
       </motion.p>

       {isVisibleNav && (
         <motion.div
           initial={{ opacity: 0, transition: { duration: 2 } }}
           animate={{ opacity: 1, transition: { duration: 2 } }}
           exit={{ opacity: 0, transition: { duration: 2 } }}
         >
           <NavFooter
             isVisibleSocial={false}
             footerStyle={style.footerSlideStyle}
             //  footerSlideStyle={{
             //    position: 'absolute',
             //    bottom: '-180px',
             //    left: '25%',
             //  }}
           />
         </motion.div>
       )}
     </div>
   );
}
