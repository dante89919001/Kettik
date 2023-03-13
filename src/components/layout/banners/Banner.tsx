import { NavLink } from 'react-router-dom';
import { Button } from '../../button/Button';
import styles from './Banners.module.css'

type Props = {};

export const Banner:React.FC<Props> = () =>{
    return(
        <div className={styles.container}>
        <div className={''}>
            <img className={styles.kettik} src="/assets/banner/logo.svg"/> 
            <p>Первый и самый надежный <br/>
            портал по поиску мероприятии</p>
            <NavLink to={'/events'}><Button text={'Узнать больше'} isActive={true}/></NavLink>
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


