import { SocialList } from '../../components/SocialList/SocialList'
import { NavLink } from 'react-router-dom'
import style from './NavFooter.module.scss'

export function NavFooter({footerStyle,footerSlideStyle, isVisibleSocial}) {
   return (
     <footer
       className={`${footerStyle} ${
         footerSlideStyle ? footerSlideStyle : ''
       }`}
      //  style={footerSlideStyle}
     >
       {isVisibleSocial && <SocialList />}

       <ul className={style.navList}>
         <li className={style.navItem}>
           <NavLink to="/" className={`${style.navLink} navPage`}>
             Main
           </NavLink>
         </li>
         <li className={style.navItem}>
           <NavLink to="/about" className={`${style.navLink} navPage`}>
             About
           </NavLink>
         </li>
         <li className={style.navItem}>
           <NavLink to="/projects" className={`${style.navLink} navPage`}>
             Projects
           </NavLink>
         </li>

         <li className={style.navItem}>
           <NavLink to="/skills" className={`${style.navLink} navPage`}>
             Skills
           </NavLink>
         </li>
         <li className={style.navItem}>
           <NavLink to="/feedback" className={`${style.navLink} navPage`}>
             Feedback
           </NavLink>
         </li>
       </ul>
     </footer>
   );
}