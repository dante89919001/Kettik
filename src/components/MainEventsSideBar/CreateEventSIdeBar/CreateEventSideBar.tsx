import { Link, useParams } from 'react-router-dom';
import { Events } from '../../../types/event';
import styles from './CreateEventSideBar.module.css'



export const CreateEventSideBar:React.FC<Events> = ({imageUrls, name,  id ,category, likes}) =>{


    return (
        <div className={styles.EventContainer}>
            <div className={styles.ColumnImg}>
            <Link className={styles.LinkTitle} to={`/events/${category}/${id}`}> <img className={styles.EventImg} src={imageUrls[0]} alt="EventImg" /></Link>
            </div>
            <div className={styles.ColumnText}>
                <div className={styles.Column}>
                    <p className={styles.EventCategory}>{category}</p>
                </div>
                <div className={styles.ColumnRight}>
                    <p className={styles.EventLikes}>{likes}</p>
                </div>
                <div className={styles.ColumnRight}>
                    <button className={styles.buttonLike}><img  src="/assets/event/like.svg" className={styles.iconLike} alt="like" /></button>
                </div>
                <div className={styles.TitleRow}>
                  <h3 className={styles.EventTitle}>{name}</h3>
                </div>
            </div>
        </div>
    )
}