import { Controller, useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { PostFormValues, SignUpForm } from '../../../types/event';
import { FormInput, FormInputFile } from '../../ui/FormInput/FormInput';
import styles from './CreateEventForm.module.css';
import { Button } from '../../button/Button';


type Props = {
  initialValues?: SignUpForm;
  onSubmit: (data: PostFormValues) => void;
};

const defaultValues: SignUpForm  = {
  name: "",
  description: "",
  category:"",
  location:"", 
  date:`${new Date().toString()}`,
  organizer:"ivan@mai.ru",
  imageUrls: [],
  time:"",
};

export const CreateEventForm: React.FC<Props> = ({ onSubmit }) => {
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

  const[category, setcategory]=useState("");

  const [imgUrl, setImageURL] = useState<any>();

  const handleTypeChange =(categoryV:string)=>{
    setValue('category',categoryV);
    setcategory(categoryV)
  }
  //Отправка формы
  const handleSuccess = (values: SignUpForm) => {
    const obj:PostFormValues =  {
      name:values.name,
      description:values.description,
      location:values.location,
      category:values.category,
      userEmail:'ivan@mail.ru',
      dateTime: `${values.date}T${values.time}`,
      imageUrls:values.imageUrls
    } 
    onSubmit(obj);
    reset();
    setImageURL("")
    setcategory('')
  }
  // Предпоказ IMG 
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  const download = (event:any) =>{
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      fileReader.readAsDataURL(file);
    } 
   
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
    
          <FormInput label="Название Мероприятия" classNameLabel={styles.labelText} value={value} name={name} onChange={onChange} type ="text" className="" placeholder='Название'  handlChange={download}/>
        

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
      <Controller
        control={control}
        name="imageUrls"
        
        rules={{
          required: true,   
         
         }} 
        render={({ field: { onChange, value, name } }) => (
          <>
        <p  className={styles.labelText}>Загрузить фотографию</p>

          <div className={styles.fileContainer}>
            <div className={styles.imgBack} style={{backgroundImage:`url(${imgUrl})`}}>
            </div>
            <FormInputFile label='Загрузить фотографию'  value={value} classNameLabel={styles.labelFile} name={name} onChange={onChange} handlChange={download} type="file" className={styles.fileInput}/>


          </div>
           
  
          </>
        
        )}
      />
      <p className={styles.titleForm}>Выбрать категорию</p>
      <div className={styles.buttonContainer}>
      <Button width={120} isActive={category=='sports'} text={'Спортивные'} onClick={()=>{handleTypeChange("sports")}}/>
      <Button width={130} isActive={category=='cultural'} text={'Культурные'} onClick={()=>{handleTypeChange("cultural")}}/>
      <Button width={180} isActive={category=='educational'} text={'Образовательные'} onClick={()=>{handleTypeChange("educational")}}/>
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
      <Button text={'Создать Мероприятие'} disable={!isValid} isActive={isValid} width={200}/>
    </form>
  );
};
