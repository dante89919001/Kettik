import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authService } from '../..';
import { Button } from '../../components/Button/Button';
import { EventList } from '../../components/Events/EventList/EventList';
import { useUserContext } from '../../providers/UserContext';
import { getEvents, temp } from '../../services/events';
import { Events } from '../../types/event';
import styles from './ProfilePage.module.css'



export const ProfilePage = () =>{
    const { username, changeUsername} = useUserContext();
    const [events,setEvents] = useState<Events[]>(temp);
    const navigate = useNavigate()

    useEffect(() => {
        getEvents('all').then((res) => {
           const eventsFilter = temp.filter((item)=>{
                if(item.userEmail == username){
                    return item;
                }
            })

            setEvents(eventsFilter);
        });}, []);

    const handleLogout = ()=>{
        authService.logout()
        changeUsername('')
        navigate('/')
    }

    return(

    <div className={styles.ProfileContainer}>
        <div>
        <div className={styles.ProfileHeader}>
            <div className={styles.profileImgContainer}>
            <img src="/assets/KETTIK.svg" alt="profileLogo" className={styles.ProfileImg} />
            <p className={styles.ProfileHeaderTitle}>{username}</p>
            </div>
    
            
            <Button isActive={true} text={'Выйти'} width={200} onClick={handleLogout}></Button>
            
        </div>
        <div className={styles.ProfileInfoContainer}>
            <div >
                <img src="/assets/profile/mail.svg" alt="mail" />
            </div>
            <div className={styles.ProfileInfo}>
            <p className={styles.profileInfoLabel}>Почта</p>
            <p className={styles.profileInfoTitle}>{username}</p>

            </div>
        </div>
        </div>
        <div className={styles.ProfileEventsContainer}>
        <div className={styles.ProfileEventsHeader}>
                <h1 className={styles.ProfileEventsHeaderTitle}>Мои ивенты</h1>
        </div>
        <div className={styles.ProfileEvents}>
            <EventList Events={events}/>          
        </div>
        <div className={styles.CreateProfileEvent}>
        <h1 className={styles.ProfileEventsHeaderTitle}>Создать ивент</h1>
        <NavLink to={'/events/create'}><Button isActive={true} width={200} text={'Создать'}></Button></NavLink>
        </div>
        </div>
    </div>
    
    )
}