import { Events } from '../../../types/event';
import { EventCreate } from '../EventCreate/EventCreate';
import styles from './EventList.module.css'


type Props = {
    Events:Events[]//Временно
}


export const EventList:React.FC<Props> = ({Events}) =>{

    return(
         <div className={styles.EventListContainer}>
            {Events.map((Ev)=>(
                <EventCreate key={Ev.id} id={Ev.id} imageUrls={Ev.imageUrls} name={Ev.name} description={Ev.description} dateTime={Ev.dateTime}/>
            ))}
        </div>    
    )
}