import {  NavLink, Outlet } from "react-router-dom"
import { Button } from "../../../components/Button/Button"
import { Banner } from "../../../components/layout/banners/Banner"
import useRequire from "../../../hooks/useRequire"
import { Events } from "../../../types/event"
import styles from './EventPage.module.css'



export const EventPage = () =>{

    const handleSearch = (events:Events[]) =>{
        
    }

    return(
        <>
        <Banner isMain={false}/>
        <div className={styles.EventPageContainer}>
        <div className={styles.EventPageHeader} >
        <div className={styles.ButtonContainer}>
           <NavLink to={'/events/all'} end
        >{({ isActive }) => (
           <Button text={'Последние'} isActive={isActive}/>
          )}</NavLink>
             <NavLink to={'/events/popular'}
        >{({ isActive }) => (
           <Button text={'Популярные'} isActive={isActive}/>
          )}</NavLink>
        <NavLink to={'/events/sports'}
        >{({ isActive }) => (
           <Button text={'Спортивные'} isActive={isActive}/>
          )}</NavLink>
          <NavLink to={'/events/educational'}
          
          >{({ isActive }) => (
          <Button text={'Образовательные'} isActive={isActive}/>

            )}</NavLink>

            <NavLink to={`/events/cultural`}
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
        </>
 
      
    )
}