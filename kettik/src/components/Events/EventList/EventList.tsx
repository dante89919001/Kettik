import { tempEvent } from '../../../types/event';
import { EventCreate } from '../EventCreate/EventCreate';
import styles from './EventList.module.css'


type Props = {
    category:string;
    Events:tempEvent[]//Временно
}


export const EventList:React.FC<Props> = ({category,Events}) =>{

    return(
        <div className={styles.EventListContainer}>
          <div className={styles.EventListHeader}>
            <h2 className={styles.EventListTitle}>{category}</h2>
            <input type="text" />
        </div> 
         <div className={styles.EventListWrapper}>
            {Events.map((Ev)=>(
                <EventCreate img={Ev.img} title={Ev.title} description={Ev.description} date={Ev.date}/>
            ))}
        </div>    
        </div>
      
    )
}