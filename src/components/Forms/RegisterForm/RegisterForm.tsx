import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { authService } from '../../..';
import { RegisterFormData } from '../../../types/auth';
import { Button } from '../../Button/Button';
import { FormInput, FormInputPassword } from '../../ui/FormInput/FormInput';
import styles from './RegisterForm.module.css';


const defaultValues: RegisterFormData  = {
    name:'',
    userEmail:'',
    password:'',
    otp:'',
  };

export const RegisterForm = () =>{

    const [sid, setSid] = useState('');
    const navigate = useNavigate()
    
    const {
        register,
        control,
        handleSubmit,
        reset,
        watch,
        formState:{ errors , isValid } ,
        setValue,
        getValues
    } = useForm<RegisterFormData>({defaultValues,  mode:"all"} )
        
    
            const handleSuccess = (user:RegisterFormData) =>{
          
                
                if(!sid){
                    authService.signUp(user.userEmail).then((res)=>{
                        console.log(res);
                        setSid(res.sid)
                    }).catch((e) => {
                        alert(e.response?.data?.message);
                      })
                }


                if(user.otp!=''){
                    authService.sendOtp(user.otp,sid).then((res)=>{
                        
                    }).then((res)=>{
                        return authService.register(sid,user.password);
                    }).then((res) => {
                        console.log(res);
                        authService.persistTokens(res);
                        alert('вы успешно зарегистрировались!');
                        navigate('/auth');
                      })
                }
            }
    
    
        return(
            <div className={styles.RegisterFormContainer}>
                <h1 className={styles.RegisterFormTitle}>Добро пожаловать!</h1>
                <p className={styles.RegisterFormSubtitle}>Найдите для то что вам подходт лучше всего! </p>
                <form onSubmit={handleSubmit(handleSuccess)}>
                <Controller
                control={control}
                name="name"
                rules={{
                required: true,
                maxLength: {
                    value: 20,
                    message: "Имя должно быть не более 20 символов"
                },  pattern: {
                    value: /^[A-Za-zА-Яа-я]/,
                    message: "Некоректное значение имени"
                },
                
                }} 
    
            render={({ field: { onChange, value, name } }) => (
        
              <FormInput label="Имя" classNameLabel={styles.labelText} value={value} name={name} onChange={onChange} type ="text" className="" placeholder='Имя'  />
            
    
            )}
          />
                            {errors.name?.message}

                <Controller
                control={control}
                name="userEmail"
                rules={{
                required: true,
                maxLength: {
                    value: 30,
                    message: "Email должен быть не более 30 символов"
                },  pattern: {
                    value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                    message: "Некоректное значение Email"
                },
                
                }} 
    
            render={({ field: { onChange, value, name } }) => (
        
              <FormInput label="Логин" classNameLabel={styles.labelText} value={value} name={name} onChange={onChange} type ="email" className="" placeholder='Логин'  />
            
    
            )}
          />
                            {errors.userEmail?.message}
    
          <Controller
                control={control}
                name="password"
                rules={{
                required: true,
                minLength: {
                    value: 6,
                    message: "Пароль  должен быть не меньше 6 символов "
                },  pattern: {
                    value: /^([A-Za-z0-9_\-\.])/,
                    message: "Пароль должен состоять из латинских букв и цифр"
                },
                
                }} 
    
            render={({ field: { onChange, value, name } }) => (
        
                <FormInputPassword label="Пароль" classNameLabel={styles.labelText} value={value} name={name} onChange={onChange}  className="" placeholder='Пароль'  />
            )}
          />
                      {errors.password?.message}
         
                {sid &&    <Controller
                control={control}
                name="otp"
                rules={{
                required: true,
                minLength: {
                    value: 6,
                    message: "Одноразовый пароль не меньше 6 цифр"
                },maxLength: {
                    value: 6,
                    message: "Одноразовый пароль не больше 6 цифр"
                }, 
                 pattern: {
                    value: /^([0-9_\-\.])/,
                    message: "Пароль должен состоять только из цифр"
                },
                
                }} 
    
            render={({ field: { onChange, value, name } }) => (
        
                <FormInputPassword label="OTP" classNameLabel={styles.labelText} value={value} name={name} onChange={onChange}  className="" placeholder='otp'  />
            )}
          />}
                <Button  isActive={isValid} text={'Регистрация!'} width={320} type={'submit'} ></Button>
                </form>
                <span className={styles.registerLink}>Есть аккаунт?  <NavLink to={'/auth'}>Войдите здесь.</NavLink> </span>
    
            </div>
        )
    
    
}