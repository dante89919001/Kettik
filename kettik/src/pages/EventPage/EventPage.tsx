import { Button } from "../../components/button/Button"
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
        <div className={styles.ButtonContainer}>
        <Button text={'Последние'} isActive={true}/>
        <Button text={'Популярные'}/>

        <Button text={'Спортивные'}/>
        <Button text={'Образовательные'}/>
        <Button text={'Культурные'}/>
        </div>
        <div className={styles.SearchContainer}>
            <input type="text" />   
        </div>
        </div>
        <EventList category='Спортивные Мероприятия' Events={temp}/>    
        </div>
      
    )
}