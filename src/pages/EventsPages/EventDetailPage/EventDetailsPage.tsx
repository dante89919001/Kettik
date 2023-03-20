import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { CommentPostForm } from '../../../components/Forms/FromComments/FormComments';
import { Footer } from '../../../components/layout/footer/Footer';
import { Header } from '../../../components/layout/header/Header';
import { createComment, getComments, getEvent} from '../../../services/events';
import { commets, Events } from '../../../types/event';
import styles from './EventsDetailsPage.module.css'
import useDate from '../../../hooks/useDate';
import getWeekMonth from '../../../Utils/getWeekMoth';


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

const initialValuesComments = [
    {
        "id": "xJA94YYBny28N1lbVBvKdsadasdas",
        "eventId": "w5At4YYBny28N1lb9RtO",
        "message": "good event",
        "dateOfCreation": "2023-03-14T23:48:58.392"
    },
    {
        "id": "xJA94YYBny28N1lbVBvKgdfgdfgdfgdf",
        "eventId": "w5At4YYBny28N1lb9RtO",
        "message": "Danil Vasiliy",
        "dateOfCreation": "2023-03-14T23:48:58.392"
    },
    {
        "id": "xJA94YYBny28N1lbVBvK",
        "eventId": "w5At4YYBny28N1lb9RtO",
        "message": "Ivan Krasavchik",
        "dateOfCreation": "2023-03-14T23:48:58.392"
    }
]



export const EventDetailsPage = () =>{
    const [event, setEvent] = useState<Events>(initialValues);
    const [comments,setComments] = useState<commets[]>(initialValuesComments);
    const month  = getWeekMonth(event.dateTime)
    const { id } = useParams();
    const {time} = useDate(event.dateTime)
    
    useEffect(() => {
        if (!id) {
          return;
        }
        getEvent(id).then((res) => {
            console.log(res);
            
            setEvent(res);
        });


      }, [id]);

      useEffect(() => {
        if (!id) {
          return;
        }
        getComments(id).then((res)=>{
            setComments(res);
        
        })
      }, [id]);


   
    
      const handleSubmit = async (data: commets) => {
        console.log(data);
        if (!id) {
            return;
          }
        createComment(id,data);
        getComments(id).then((res)=>{
            setComments(res);
        });
    };


    return (
        <>
        <Header/>
        <div className={styles.EventDetailContainer}>
            <div className={styles.EventDetailsHeader}>
                <h1 className={styles.EventDetailstitle}>{event.name}</h1>
                <div className={styles.EventDetailstitleContainer} >
                    <p >{event.category}</p>
                    <p>{`${time} , ${month} `}</p>
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
                    <h2 className={styles.EventDateTitle}>{month}</h2>
                    <img src="/assets/event/arrow.svg" alt="arrow" />
                </div>
                <div className={styles.EventInfo}>
                <img src="/assets/event/geo.svg" alt="geo" />
                <div>
                <p className={styles.EventInfoTitle}>Организаторы</p>
                <p className={styles.EventDateDescription}>{event.userEmail}</p>
                </div>
                </div>
                <div className={styles.EventInfo}>
                <img src="/assets/event/time.svg" alt="time" />
                <p className={styles.EventInfoTitle}>{time}</p>
                </div>
                </div>
              
            </div>
            <div className={styles.CommentsContainer}>
            <h3 className={styles.CommentsTitle}>Комментарии</h3>
                <CommentPostForm onSubmit={handleSubmit} />
            <div>
                    {comments?.map((comment)=>{
                            return <p key={comment.id} className={styles.comment}>{comment.message}</p>
                    })}
            </div>
              
            </div>
        </div>
        <Footer/>
        </>
      
  
    
    )


}