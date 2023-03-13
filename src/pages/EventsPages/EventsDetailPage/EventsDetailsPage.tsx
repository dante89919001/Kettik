import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../../../components/layout/footer/Footer';
import { Header } from '../../../components/layout/header/Header';
import { getEvent, temp } from '../../../services/events';
import { Events } from '../../../types/event';
import styles from './EventsDetailsPage.module.css'


const initialValues =    {
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
}

export const EventsDetailsPage = () =>{
    const [event, setEvent] = useState<Events>(initialValues);
    const [comments,setComments] = useState();


    const getWeekMonth = () => {
        const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        let date = new Date(event.dateTime)
        let day = date.toISOString().slice(8,10) >= '10' ? date.toISOString().slice(8,10) : date.toISOString().slice(9,10)
        return `${day} ${month[date.getMonth()]}`;
      }
    
    const getTime = () =>{
        let date = new Date(event.dateTime)
     
        return  `${date.getHours()}:${date.getMinutes()}`;
    }

      

    const { id } = useParams();

 /*    useEffect(() => {
        if (!id) {
          return;
        }
        getEvent(id).then((res) => {
            setEvent(res);
        });
      }, [id]);
     */
    


    return (
        <>
        <Header/>
        <div className={styles.EventDetailContainer}>
            <div className={styles.EventDetailsHeader}>
                <h1 className={styles.EventDetailstitle}>{event.name}</h1>
                <div className={styles.EventDetailstitleContainer} >
                    <p >{event.category}</p>
                    <p>{`${getTime()} , ${getWeekMonth()} `}</p>
                    <div className={styles.EventDetailstitleLikesContainer}>
                    <p>{event.likes}</p>
                    <img  src="/assets/event/like.svg" alt="like" />
                    </div>
                  
                </div>
            </div>
            <img className={styles.EventDetailsImg} src={event.imageUrls[0]} alt={event.name} />
            <div className={styles.EventDetailsMain}>
                <div className={styles.EventDetailsMainLeft}>
                <h2 className={styles.EventDetailsSubtitle}>{event.name}</h2>
                <p className={styles.EventDetailsDescription}>{event.description}</p>
                </div>
                <div className={styles.EventDetailsMainRight}>
                <div className={styles.EventDate}>  
                    <img src="/assets/event/calendar.svg" alt="calendar" />
                    <h2 className={styles.EventDateTitle}>{getWeekMonth()}</h2>
                    <img src="/assets/event/arrow.svg" alt="arrow" />
                </div>
                <div className={styles.EventInfo}>
                <img src="/assets/event/geo.svg" alt="geo" />
                <div>
                <p className={styles.EventInfoTitle}>Организаторы</p>
                <p className={styles.EventDateDescription}>{event.organizer}</p>
                </div>
                </div>
                <div className={styles.EventInfo}>
                <img src="/assets/event/time.svg" alt="time" />
                <p className={styles.EventInfoTitle}>{getTime()}</p>
                </div>
                </div>
              
            </div>
            <div className={styles.CommentsContainer}>
                <h3 className={styles.CommentsTitle}>Комментарии</h3>

            </div>
        </div>
        <Footer/>
        </>
      
  
    
    )


}