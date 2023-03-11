import { tempEvent } from '../../../types/event';
import { EventCreate } from '../eventCreate/EventCreate';
import styles from './EventList.module.css'


type Props = {
    category:string;
    Events:tempEvent[]//Временно
}


export const EventList:React.FC<Props> = ({category,Events}) =>{

    return(
         <div className={styles.EventListContainer}>
            {Events.map((Ev,index)=>(
                <EventCreate key={index} img={Ev.img} title={Ev.title} description={Ev.description} date={Ev.date}/>
            ))}
        </div>    
    )
}