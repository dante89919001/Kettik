import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css'


type Props = {};

export const Header:React.FC<Props> =() =>{

    return(
        <header className={styles.header}>
            <div className={styles.header_inner_logo}>
                <NavLink to={'/'} className={styles.logo}><p >KETTIK</p></NavLink>
                <div className={styles.geo_container}>
                <img src="/assets/header/geo.svg" alt="geo" />
                <p className={styles.logo_text}> Алматы</p>
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
                        <NavLink to={'/events'} 
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
                    <li >
                        <NavLink to={'/profile'} 
                        className={({ isActive }) =>
                        isActive ? `${styles.nav_item} ${styles.active}` : `${styles.nav_item}`
                     }

                        ><img src="/assets/header/profile_icon.svg" alt="profile" /></NavLink>
                    </li>
                </ul>
            </nav>
         
        </header>
    )
}