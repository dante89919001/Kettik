import { useState } from "react"
import {  NavLink } from "react-router-dom"
import { Button } from "../../../components/button/Button"
import { EventList } from "../../../components/Events/EventList/EventList"
import { temp } from "../../../services/events"



export const SportEventsPage = () =>{

    return(
        <EventList  Events={temp}/>          
    )
}