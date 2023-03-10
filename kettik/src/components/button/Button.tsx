import { NavLink } from 'react-router-dom';
import styles from './Button.module.css'

type Props={
    text:string;
    path?:string;
}

export const NavButton:React.FC<Props> = ({text ,path}) =>{

    return (
            <NavLink 
        to={`/${path}`} 
        className={({ isActive }) =>
             isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`
          }
        >
               <p >{text}</p> 
        </NavLink>
    )
} 