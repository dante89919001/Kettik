import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { getEvent, updateEvent } from '../../services/events';
import { Events, PostFormValues } from '../../types/event';
import { EditEventForm } from '../../components/Forms/EditEventForm/EditEventForm';
import styles from './EditEventPage.module.css';




export const EditEventPage = () => {

    const {id} = useParams()

    const [event, setEvent] = useState<Events>();
    
    useEffect(() => {
        if (!id) {
          return;
        }
        
        getEvent(id).then((res) => {
            
          setEvent(res);
        });
      }, [id]);
      
      const navigate = useNavigate();


    const handleSubmit = (data: PostFormValues) => {
        let formData = new FormData();
        const json = JSON.stringify(data);
        const blob = new Blob([json], { type: 'application/json' });
        formData.append('event', blob, '');
        if(id){
            updateEvent(id,formData);
        }
        alert('Ивент успешно изменен')
        navigate('/profile')
        console.log(data);
    };
    return (
        <>
            <div className={styles.EventFormContainer}>
                <div className={styles.headerContainer}>
                    <NavLink to={'/profile'} className={styles.navLinkContainer}>
                        <img src='/assets/header/arrowLeft.svg' alt='arrow' />
                        <p className={styles.title}> Вернуться назад</p>
                    </NavLink>
                </div>

                {event &&  <EditEventForm onSubmit={handleSubmit} Event={event} /> }
            </div>
        </>
    );
};
