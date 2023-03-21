import React, { useEffect, useState } from "react";
import { Events } from "../../../types/event";
import { CreateEventSideBar } from "../CreateEventSIdeBar/CreateEventSideBar";

import styles from './MainEventsSideBarLits.module.css'

type Props = {
    Events:Events[]//Временно
}

const initialValues =  [{
    id: "AANd2ds4YdsaBtFDbdsaKLnbdsadSSpV",
    name: "Music Festival",
    description: "A music festival featuring local bands",
    category: "EDUCATIONAL",
    location: "Central Park",
    likes: 230,
    dateTime: "2023-03-11T16:30",
    organizer: "John Doe",
    dateOfCreation: "2023-03-13T20:26:09.310",
    imageUrls: [
        "/assets/KETTIK.svg"     
       ]
}]  
export const MainEventsSideBar:React.FC<Props> = ({Events}) =>{

    return(
        <div className={styles.MainEventsSideBar}>
            <p className={styles.EventText}>Что-то интересное</p>
            <div className={styles.EventListContainer}>
            {Events.map((Ev)=>(
                <CreateEventSideBar key={Ev.id} category={Ev.category} id={Ev.id} imageUrls={Ev.imageUrls} name={Ev.name} likes={Ev.likes} description={""} dateTime={""} />
            ))}
        </div>  
        </div>
     
    )
}
