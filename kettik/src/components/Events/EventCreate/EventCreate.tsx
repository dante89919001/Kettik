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
            <p className={styles.EventDate}>{date}</p>
        </div>
    )
}