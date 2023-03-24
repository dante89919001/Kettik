import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EventList } from "../../../components/Events/EventList/EventList"
import { getEvents } from "../../../services/events";
import { Events } from "../../../types/event";

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



export const EventsDetailsPage = () => {

    const {category} = useParams();

    const [events, setEvents] = useState<Events[]>(initialValues);

  useEffect(() => {
    if(!category){
        return;
    }

    getEvents(category).then((res) => {
        setEvents(res);
    });

      }, [category]);

    return (
        <>
                <EventList Events={events}/>          
        </>    
    )
}