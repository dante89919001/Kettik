import styles from './Header.module.css'


type Props = {};

export const Header:React.FC<Props> =() =>{

    return(
        <header className={styles.header}>
            <div className={styles.header_inner_logo}>
                <a href="#" className={styles.logo}><p >KETTIK</p></a>
                <div className={styles.geo_container}>
                <img src="/assets/header/geo.svg" alt="geo" />
                <p className={styles.logo_text}> Алматы</p>
                </div>
            </div>

            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li >
                        <a className={`${styles.nav_item} ${styles.active}`}>Главная</a>
                    </li>
                    <li >
                        <a className={styles.nav_item}>Ивенты</a>
                    </li >
                    <li >
                        <a className={styles.nav_item}>О проекте</a>
                    </li>
                    <li>
                        <button className={styles.lang}>ru</button>
                    </li>
                    <li >
                        <a className={styles.nav_item}><img src="/assets/header/profile_icon.svg" alt="profile" /></a>
                    </li>
                </ul>
            </nav>
         
        </header>
    )
}