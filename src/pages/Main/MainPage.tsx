import { useState } from 'react';
import { Button } from '../../components/button/Button'
import { EventList } from '../../components/Events/EventList/EventList';
import { Banner } from '../../components/layout/banners/Banner';
import useRequire from '../../hooks/useRequire';
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

    const {events,url,handleChangeFilter} = useRequire(`all`);
    
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
             <EventList gap={40} Events={events}/>

        </div>
        </div>
        </>
  
    )
}
