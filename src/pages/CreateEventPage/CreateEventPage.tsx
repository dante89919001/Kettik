import { NavLink } from "react-router-dom";
import { CreateEventForm } from "../../components/Forms/CreateEventForm/CreateEventForm"
import { createEvent } from "../../services/events";
import { PostFormValues } from "../../types/event"
import styles from './CreateEventPage.module.css';



export const CreateEventPage = () =>{

    const handleSubmit = (data:PostFormValues) =>{
        createEvent(data);
        console.log(data);
        
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