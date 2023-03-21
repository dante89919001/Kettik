import { useEffect, useState } from 'react';
import { Button } from '../../components/button/Button'
import { MainCalendar } from '../../components/Calendar/Calendar';
import { EventList } from '../../components/Events/EventList/EventList';
import { Banner } from '../../components/layout/banners/Banner';
import { MainEventsSideBar } from '../../components/MainEventsSideBar/MainEventsSideBarList/MainEventsSideBarLits';
import useRequire from '../../hooks/useRequire';
import { temp } from '../../services/events';
import { Events } from '../../types/event';
import getDate from '../../Utils/getDate';
import styles from './MainPage.module.css'

const InitialValueButtons = [
        { 'Последние': true},

        { 'Популярные': false},

        { 'Спортивные': false},

        { 'Образовательные': false},

        { 'Культурные': false}

    ]
const activeUrls = [
    { 'Последние': 'all'},

    { 'Популярные': 'popular'},

    { 'Спортивные': 'sports'},

    { 'Образовательные': 'educational'},

    { 'Культурные': 'cultural'}


]
export const MainPage = () =>{



    const [activeButtons, setActiveButtons] = useState<object[]>(InitialValueButtons);

    const {events,url,handleChangeFilter, setEvents} = useRequire(`all`,'size=8');

    const [activeEvents, setActiveEvents] = useState(events);

    const {events:sideBarEvents} = useRequire(`popular`, 'size=5');



    const handleChangeButton = (text:string) => {
        let activeUrl;
        let keys:string[] = [];
        let resArray ;
       activeButtons.forEach((item)=>{
     
            keys.push(Object.keys(item)[0])
        
        })
        activeUrls.forEach((item)=>{
            if(Object.keys(item)[0] == text){
                activeUrl = Object.values(item)[0];                
            }
        })
        
        resArray = activeButtons.map((item:object, index:number)=>{
            if(Object.keys(item)[0] == text){
                return {[keys[index]]:true}
           }else{
            return {[keys[index]]:false}
        }
        })
        setActiveButtons(resArray) 
        if(activeUrl){
            handleChangeFilter(activeUrl);
        }
        setActiveEvents(events);
    }
    
   
    useEffect(()=>{
        setActiveEvents(events)

    },[events])


    const handlCalendarChange = (v: Date) =>{        
        let today:string; 
        let ms = +v+ 21600000 ;
        let tempDate
        tempDate = new Date(ms)
        today = tempDate.toISOString().slice(0,10);
        let resObj:Events[] = [];
        events.map((event) =>{
            if(getDate(event.dateTime) == today){
                resObj.push(event)
            }
        })
        setActiveEvents(resObj);
    }
   

    return (
        <>
        <Banner isMain={true}/>
        <div className={styles.MainPageContainer}>
        <div className={styles.MainEventsContainer}>
        <div className={styles.MainPageHeader} >
        <div className={styles.ButtonContainer}>
         {activeButtons.map((button:object, index )=>{
                const textButton:string = Object.keys(button)[0];
                const isActive:boolean = Object.values(button)[0];
                return <Button key={index} text={textButton} isActive={isActive} onClick={handleChangeButton}/>
         })}
        </div>
        </div>
             <EventList gap={40} Events={activeEvents}/>

        </div>
        <div className={styles.Sidebar}>
            <div className={styles.CalendarContainer}>
            <MainCalendar  onChange={handlCalendarChange}/>

            </div>
            <div className={styles.EventsSideBarContainer}>
            <MainEventsSideBar Events={sideBarEvents}/>

            </div>

        </div>
        </div>
        </>
  
    )
}
