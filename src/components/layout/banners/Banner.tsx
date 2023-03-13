import { NavLink } from 'react-router-dom';
import { Button } from '../../button/Button';
import styles from './Banners.module.css'

type Props = {
    isMain:boolean;
};

export const Banner:React.FC<Props> = ({isMain}) =>{

    return(

        <>
        {isMain == true 
        ? <div className={styles.container}>
        <div className={styles.firstBLock}>
            <h2 className={styles.BannerTitle}>События, которые не стоит пропустить: календарь мероприятий нашего города </h2>
            <NavLink to={'/events'} className={styles.btn}><Button text={'Kettik!'} isActive={true} width={193}/></NavLink>
        </div>
        <div className={''}>
            <img src="/assets/banner/1.png"/> 
        </div>
        <div className={''}>
            <img src="/assets/banner/2.png"/> 
        </div>
        </div>
    
        :<div className={styles.container}>
        <div className={styles.eventsVer}>
        <h2 className={styles.BannerTitle}>"Все, что нужно знать о грядущих мероприятиях: расписание и многое другое"</h2>

        </div>

        </div>}

        </>
  
    )
     

}



