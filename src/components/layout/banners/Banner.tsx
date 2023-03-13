import { NavLink } from 'react-router-dom';
import { Button } from '../../button/Button';
import styles from './Banners.module.css'

type Props = {};

export const Banner:React.FC<Props> = () =>{
    return(
        <div className={styles.container}>
        <div className={styles.firstBLock}>
            <h2 className={styles.ii}>События, которые не стоит <br/>
            пропустить: календарь <br/>
            мероприятий нашего города </h2>
            <NavLink to={'/events'} className={styles.btn}><Button text={'Kettik!'} isActive={true} width={193}/></NavLink>
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



