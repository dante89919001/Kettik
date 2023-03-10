import { NavButton } from '../../button/Button';
import styles from './Banners.module.css'

type Props = {};

export const Banner:React.FC<Props> = () =>{
    return(
        <div className={styles.container}>
        <div className={styles.firstBLock}>
            <img className={styles.kettik} src="/assets/banner/logo.svg"/> 
            <p>Первый и самый надежный <br/>
            портал по поиску мероприятии</p>
           <NavButton text='Узнать больше' path=''/>
        </div>
        <div className={''}>
            <img src="/assets/banner/1.png"/> 
        </div>
        <div className={''}>
            <img src="/assets/banner/2.png"/> 
        </div>
        </div>
    )

}


