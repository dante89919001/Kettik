import { useState } from "react"
import {  NavLink } from "react-router-dom"
import { Button } from "../../../components/button/Button"
import { EventList } from "../../../components/Events/eventList/EventList"


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
export const EducationEventsPage = () =>{

    return(
        <EventList category='Спортивные Мероприятия' Events={temp}/>
    )
}