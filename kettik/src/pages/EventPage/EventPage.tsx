import { EventList } from "../../components/Events/eventList/EventList"
import styles from './EventPage.module.css'


const temp = [
    { img: '/assets/KETTIK.svg',
    title:'Выставка «Ван Гог. Ожившие полотна»',
    description:'Первый в Казахстане проекционный музей Lumiere-Hall открывает выставку «Ван Гог. Ожившие полотна».',
    date: '13 ФЕВРАЛЯ'},
    { img: '/assets/KETTIK.svg',
    title:'Выставка «Ван Гог. Ожившие полотна»',
    description:'Первый в Казахстане проекционный музей Lumiere-Hall открывает выставку «Ван Гог. Ожившие полотна».',
    date: '13 ФЕВРАЛЯ'},
    { img: '/assets/KETTIK.svg',
    title:'Выставка «Ван Гог. Ожившие полотна»',
    description:'Первый в Казахстане проекционный музей Lumiere-Hall открывает выставку «Ван Гог. Ожившие полотна».',
    date: '13 ФЕВРАЛЯ'},
    { img: '/assets/KETTIK.svg',
    title:'Выставка «Ван Гог. Ожившие полотна»',
    description:'Первый в Казахстане проекционный музей Lumiere-Hall открывает выставку «Ван Гог. Ожившие полотна».',
    date: '13 ФЕВРАЛЯ'},
    { img: '/assets/KETTIK.svg',
    title:'Выставка «Ван Гог. Ожившие полотна»',
    description:'Первый в Казахстане проекционный музей Lumiere-Hall открывает выставку «Ван Гог. Ожившие полотна».',
    date: '13 ФЕВРАЛЯ'},
    { img: '/assets/KETTIK.svg',
    title:'Выставка «Ван Гог. Ожившие полотна»',
    description:'Первый в Казахстане проекционный музей Lumiere-Hall открывает выставку «Ван Гог. Ожившие полотна».',
    date: '13 ФЕВРАЛЯ'},
    
  ]
export const EventPage = () =>{
    return(
        <div className={styles.EventPageContainer}>
        <div className={styles.EventPageHeader} >
        <input type="text" /> 
        </div>
        <EventList category='Спортивные Мероприятия' Events={temp}/>    
        </div>
      
   
    )
}