import { useState } from "react"
import { NavButton } from "../../components/button/Button"
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
        <NavButton text={'Последние'} />
        <NavButton text={'Популярные'}/>

        <NavButton text={'Спортивные'} path={'events'}></NavButton>
        <NavButton text={'Образовательные'} path={'events/education'}></NavButton>
        <NavButton text={'Культурные'} path={'events/culture'}></NavButton>
        </div>
        <div className={styles.SearchContainer}>
            <input type="text" />   
        </div>
        </div>
        <EventList category='Спортивные Мероприятия' Events={temp}/>    
        </div>
      
    )
}