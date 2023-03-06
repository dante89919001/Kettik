import styles from './banners.module.css'

type Props = {};

export const banners:React.FC<Props> =() =>{

    return(
        <div className={styles.container}>
            <div className={styles.item item-1}>
                <img className="kettik" src="KETTIK.svg"> 
                <p>Первый и самый надежный <br>
                портал по поиску мероприятии</p>
                <button className={button}>Узнать больше</button>
            </div>
            <div className={item item-2}>
                <img src="1.png"> 
            </div>
            <div className={item item-3}>
                <img src="2.png"> 
            </div>
        </div>
    )
}
