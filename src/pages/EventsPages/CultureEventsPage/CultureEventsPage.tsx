import { useState } from "react"
import {  NavLink } from "react-router-dom"
import { Button } from "../../../components/button/Button"
import { EventList } from "../../../components/Events/EventList/EventList"
import { temp } from "../../../services/events"
import styles from './EventPage.module.css'



export const CultureEventsPage = () =>{

    return(
        <EventList  Events={temp}/>    
    )
}