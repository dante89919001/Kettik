import { tempEvent } from '../../../types/event';//Временно
import styles from './Event.module.css'

type Props = {
    img:string;
    title:string;
    description:string;
    date:string;

};


export const EventCreate:React.FC<tempEvent> = ({img, title, description, date}) =>{
    return (
        <div className={styles.EventContainer}>
            <img className={styles.EventImg} src={img} alt="EventImg" />
            <h3 className={styles.EventTitle}>{title}</h3>
            <p className={styles.EventDescription}>{description}</p>
            <div className={styles.dateContainer}>
            <p className={styles.EventDate}>{date}</p>
            <button className={styles.buttonLike}><img  src="/assets/event/like.svg" alt="like" /></button>
            </div>
        </div>
    )
}