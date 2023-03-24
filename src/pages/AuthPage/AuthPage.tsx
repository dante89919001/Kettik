import { NavLink, Outlet } from 'react-router-dom';
import styles from './AuthPage.module.css';



export const AuthPage = () =>{
    return(
        <div className={styles.AuthContainer}>
            <div className={styles.AuthHeader}>
            <NavLink to={'/'} className={styles.logo}><p >KETTIK</p></NavLink>
            </div>
            <Outlet/>

        </div>
    )
}