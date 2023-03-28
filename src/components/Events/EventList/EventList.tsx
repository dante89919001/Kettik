import { Events } from '../../../types/event';
import { EventCreate } from '../EventCreate/EventCreate';
import styles from './EventList.module.css'


type Props = {
    Events:Events[]//Временно
    gap?:number
}


export const EventList:React.FC<Props> = ({Events,gap = 100}) =>{

    return(
         <div className={styles.EventListContainer} style={{gap:`${gap}px`}}>
            {Events.map((Ev)=>(
                <EventCreate key={Ev.id} location={Ev.location} category={Ev.category} id={Ev.id} imageUrls={Ev.imageUrls} name={Ev.name} description={Ev.description} dateTime={Ev.dateTime}/>
            ))}
        </div>    
    )
}