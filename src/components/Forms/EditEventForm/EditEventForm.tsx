import { Controller, useForm } from 'react-hook-form';
import React, { useState } from 'react';

import styles from './EditEventForm.module.css';
import { Events, PostFormValues, SignUpForm } from '../../../types/event';
import { useUserContext } from '../../../providers/UserContext';
import { FormInput } from '../../ui/FormInput/FormInput';
import { Button } from '../../Button/Button';
import useDate from '../../../hooks/useDate';




type Props = {
  Event: Events;
  onSubmit: (data: PostFormValues) => void;
};



export const EditEventForm: React.FC<Props> = ({ onSubmit , Event }) => {

  const {time} = useDate(Event.dateTime);
  


  const[category, setcategory]=useState(Event.category);

  const { username} = useUserContext();
    const defaultValues: SignUpForm  = {
        name: Event.name,
        description: Event.description,
        category:Event.category,
        location:Event.location, 
        date:`${Event.dateTime.slice(0,10)}`,
        time:time,
        organizer:"ivan@mai.ru",
        imageUrls:[''],
      };
      

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState:{ errors , isValid } ,
    setValue,
    getValues
  } = useForm<SignUpForm>({defaultValues , mode:"all"} )




  const handleTypeChange =(categoryV:string)=>{
    setValue('category',categoryV);
    setcategory(categoryV)
  }
  //Отправка формы
  const handleSuccess = (values: SignUpForm) => {
    const obj:PostFormValues =  {
      name:values.name,
      description:values.description,
      category:values.category,
      location:values.location,
      userEmail:username,
      dateTime: `${values.date}T${values.time}`,
    } 
    onSubmit(obj);
  }


  return (
    <form onSubmit={handleSubmit(handleSuccess)}>
      <p className={styles.titleForm}>Мероприятия</p>
      <Controller
        control={control}
        name="name"
        rules={{
          required: true,
          maxLength: {
            value: 50,
            message: "Название должно умещаться в 50 символов, можете добавить описание"
          },  pattern: {
            value: /^[A-Za-zА-Яа-я0-9/-/!/?/./]/,
            message: "Название не должно включать особые символы"
          },
          
         }} 

        render={({ field: { onChange, value, name } }) => (
    
          <FormInput label="Название Мероприятия" classNameLabel={styles.labelText} value={value} name={name} onChange={onChange} type ="text" className="" placeholder='Название'  />
        

        )}
      />
      <Controller
        control={control}
        name="description"
        
        rules={{
          required: true,
          maxLength: {
            value: 500,
            message: "Ошибка валидации, вы превысили допустимое количество символо - 500 "
          }
         }} 

        render={({ field: { onChange, value, name } }) => (
            <div className={styles.textAreaContainer}>
            <label htmlFor="description" className={styles.labelText}>Описание</label>
            <textarea   value={value} name={name} onChange={onChange} cols={2} rows={10}
          className={styles.inputDiscription} placeholder='Описание вашего мероприятия' />
            {errors.description?.message}

            </div>

        )}
      />
     
      <div className={styles.buttonContainer}>
      <Button width={120} isActive={category=='SPORTS'} text={'Спортивные'} onClick={()=>{handleTypeChange("SPORTS")}}/>
      <Button width={130} isActive={category=='CULTURAL'} text={'Культурные'} onClick={()=>{handleTypeChange("CULTURAL")}}/>
      <Button width={180} isActive={category=='EDUCATIONAL'} text={'Образовательные'} onClick={()=>{handleTypeChange("EDUCATIONAL")}}/>
      </div>
      <p className={styles.titleForm}>Время и Место</p>
      <Controller
        control={control}
        name="location"
        
        rules={{
          required: true, 
          maxLength: {
            value: 100,
            message: "Максимальное колиество символов 100"
          }     
         }} 
        render={({ field: { onChange, value, name } }) => (
          <FormInput label= "Адрес" classNameLabel={styles.labelText} value={value} name={name} onChange={onChange} type="text" className="" placeholder='Адрес' />
        )}
      />
      
      
      <div className={styles.dateContainer}>
      <Controller
        control={control}
        name="date"
        
        rules={{
          required: true,      
         }} 
        render={({ field: { onChange, value, name } }) => (
          <FormInput label='Выбрать дату' classNameLabel={styles.labelText} value={value} name={name} onChange={onChange} type="date" className="" placeholder='20 Марта'  />
        )}
      />
      <Controller
        control={control}
        name="time"
        
        rules={{
          required: true,      
         }} 
        render={({ field: { onChange, value, name } }) => (
          <FormInput label= "Выбрать время" classNameLabel={styles.labelText} value={value} name={name} onChange={onChange} type="time" className="" placeholder='11:00' />
        )}
      />
 
      </div>
      <Button text={'Редактировать мероприятие'} disable={!isValid} isActive={isValid} width={250}type={'submit'} />
    </form>
  );
};
