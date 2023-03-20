import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'


export const Footer = () =>{
    return (
        <footer className={styles.footerContainer}>
          <div className={styles.footer_box}>
            <NavLink to={'/'} className={styles.footer_logo}>КЕТТІК</NavLink>
            <div className={styles.footer_socials}>
              <a href='#' >
                <img src="/assets/footer/facebook.svg" alt="facebook" />
              </a>
              <a href='#' >
              <img src="/assets/footer/twitter.svg" alt="twitter" />
              </a>
              <a href='#' >
              <img src="/assets/footer/linkedin.svg" alt="linkedin" />
              </a>
              <a href='#' >
              <img src="/assets/footer/instagram.svg" alt="instagram" />
              </a>
            </div>
          </div>
    
          <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li >
                        <NavLink to={'/'}
                            className={({ isActive }) =>
                             isActive ? `${styles.nav_item} ${styles.active}` : `${styles.nav_item}`
                          }
                        >Главная</NavLink>
                    </li>
                    <li >
                        <NavLink to={'/events/all'} 
                        className={({ isActive }) =>
                             isActive ? `${styles.nav_item} ${styles.active}` : `${styles.nav_item}`
                          }
                        
                        >Ивенты</NavLink>
                    </li >
                    <li >
                        <NavLink to={'/about'} 
                        className={({ isActive }) =>
                        isActive ? `${styles.nav_item} ${styles.active}` : `${styles.nav_item}`
                     }
                        >О проекте</NavLink>
                    </li>
                    <li>
                        <button className={styles.lang}>ru</button>
                    </li>
                </ul>
            </nav>
        </footer>
      )

}