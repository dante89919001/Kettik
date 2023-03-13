import { useState } from 'react';
import { Button } from '../../components/button/Button'
import { EducationEventsPage } from '../EventsPages/EducationEventsPage/EducationEvenetsPage'
import styles from './MainPage.module.css'

const InitialValueButtons = [
        { 'Последние': true},

        { 'Популярные': false},

        { 'Спортивные': false},

        { 'Образовательные': false},

        { 'Культурные': false}

    ]
 

export const MainPage = () =>{

    const [activeButtons, setActiveButtons] = useState<object[]>(InitialValueButtons);


    const handleChangeFilter = (text:string) => {

        let keys:string[] = [];
        let resArray ;
       activeButtons.forEach((item)=>{
     
            keys.push(Object.keys(item)[0])
        
        })
        
        resArray = activeButtons.map((item:object, index:number)=>{
            if(Object.keys(item)[0] == text){
                return {[keys[index]]:true}
           }else{
            return {[keys[index]]:false}
        }
        })
        setActiveButtons(resArray) 
        
    }
    return (
        <div className={styles.MainPageContainer}>
        <div className={styles.MainEventsContainer}>
        <div className={styles.MainPageHeader} >
        <div className={styles.ButtonContainer}>

         {activeButtons.map((button:object, index )=>{
                const textButton:string = Object.keys(button)[0];
                const isActive:boolean = Object.values(button)[0];
                return <Button key={index} text={textButton} isActive={isActive} onClick={handleChangeFilter}/>
         })}

       
        </div>
    
        </div>
             <EducationEventsPage />
        </div>

        </div>
    )
}
