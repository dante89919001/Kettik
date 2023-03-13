import { Link, useParams } from 'react-router-dom';
import { Events } from '../../../types/event';
import styles from './Event.module.css'




export const EventCreate:React.FC<Events> = ({imageUrls, name, description, dateTime, id}) =>{


    return (
        <div className={styles.EventContainer}>
            <Link to={`/events/${id}`}> <img className={styles.EventImg} src={imageUrls[0]} alt="EventImg" /></Link>
            <h3 className={styles.EventTitle}>{name}</h3>
            <p className={styles.EventDescription}>{description}</p>
            <div className={styles.dateContainer}>
            <p className={styles.EventDate}>{dateTime}</p>
            <button className={styles.buttonLike}><img  src="/assets/event/like.svg" alt="like" /></button>
            </div>
        </div>
    )
}