import { useState } from "react"
import {  NavLink, Outlet } from "react-router-dom"
import { Button } from "../../../components/button/Button"
import { EventList } from "../../../components/Events/eventList/EventList"
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
           <NavLink to={'/events'} end
        >{({ isActive }) => (
           <Button text={'Последние'} isActive={isActive}/>
          )}</NavLink>
             <NavLink to={'/events/popular'}
        >{({ isActive }) => (
           <Button text={'Популярные'} isActive={isActive}/>
          )}</NavLink>
        <NavLink to={'/events/sport'}
        >{({ isActive }) => (
           <Button text={'Спортивные'} isActive={isActive}/>
          )}</NavLink>
          <NavLink to={'/events/education'}
          
          >{({ isActive }) => (
          <Button text={'Образовательные'} isActive={isActive}/>

            )}</NavLink>

            <NavLink to={'/events/culture'}
          >{({ isActive }) => (
              <Button text={'Культурные'} isActive={isActive}/>
            )}</NavLink>
        </div>
        <div className={styles.SearchContainer}>
            <input type="text" />   
        </div>
        </div>
            <Outlet/>
        </div>
      
    )
}