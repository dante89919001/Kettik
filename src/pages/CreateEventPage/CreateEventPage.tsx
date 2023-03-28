import { NavLink } from "react-router-dom";
import { CreateEventForm } from "../../components/Forms/CreateEventForm/CreateEventForm"
import { createEvent } from "../../services/events";
import { PostFormValues } from "../../types/event"
import styles from './CreateEventPage.module.css';



export const CreateEventPage = () =>{

    const handleSubmit = (data:PostFormValues,photo:File) =>{
        let formData = new FormData();
        formData.append('event', JSON.stringify(data))
        formData.append('photos',photo)
        createEvent(formData);
        console.log(formData.getAll('event'));
        console.log(formData.getAll('photos'));
    }
    return (
        <>
        <div className={styles.EventFormContainer}>
            <div className={styles.headerContainer}>
            <NavLink to={'/'} className={styles.navLinkContainer}>
            <img src="/assets/header/arrowLeft.svg" alt="arrow" />
            <p className={styles.title}>  Вернуться на главную</p></NavLink>
            </div>

            <CreateEventForm onSubmit={handleSubmit}/>
        </div>  
        </>
    
    )
}