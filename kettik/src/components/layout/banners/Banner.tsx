import styles from './Banners.module.css'

type Props = {};

export const Banner:React.FC<Props> = () =>{
    return(
        <div className={styles.container}>
        <div className={''}>
            <img className={styles.kettik} src="/assets/KETTIK.svg"/> 
            <p>Первый и самый надежный <br/>
            портал по поиску мероприятии</p>
            <button className={`${styles.button} ${styles.active}`}>Узнать больше</button>
        </div>
        <div className={''}>
            <img src="1.png"/> 
        </div>
        <div className={''}>
            <img src="2.png"/> 
        </div>
        </div>
    )

}


