import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { authService } from '../../..';
import { useUserContext } from '../../../providers/UserContext';
import { LoginFormData } from '../../../types/auth';
import { Button } from '../../Button/Button';
import { FormInput, FormInputPassword } from '../../ui/FormInput/FormInput';

import styles from './LoginForm.module.css';


  const defaultValues: LoginFormData  = {
    userEmail:'',
    password:'',
  };

export const LoginForm: React.FC = ()=>{



        const {
          register,
          control,
          handleSubmit,
          reset,
          watch,
          formState:{ errors , isValid } ,
          setValue,
          getValues
        } = useForm<LoginFormData>({defaultValues , mode:"all"} )


        const { changeUsername } = useUserContext();

        const location = useLocation();

        const navigate = useNavigate();

        const fromPage = location.state?.from?.pathname||'/'

        const handleSuccess = (user:LoginFormData) =>{

            console.log(user);
            authService
            .login({
              password: user.password,
              username: user.userEmail,
            })
            .then((r) => {
              authService.persistTokens(r);
              return authService.getProfile();
            })
            .then((r) => {
              authService.persistProfile(r);
              changeUsername(r.email);
              navigate('/');

            })
            .catch((e) => {
              alert(e.response?.data?.message);
            })
          
      
      
        }

        
    return(
        <div className={styles.LoginFormContainer}>
            <h1 className={styles.LoginFormTitle}>Добро пожаловать!</h1>
            <p className={styles.LoginFormSubtitle}>Найдите для то что вам подходт лучше всего! </p>
            <form onSubmit={handleSubmit(handleSuccess)}>
            <Controller
            control={control}
            name="userEmail"
            rules={{
            required: true,
            maxLength: {
                value: 20,
                message: "Email должен быть не более 20 символов"
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

            <div className={styles.resetPasswordTitle}>
            <NavLink to={'/auth'} >Забыли пароль?</NavLink>

            </div>
            <Button  isActive={isValid} text={'Вперед!'} width={320}></Button>
            </form>
            <span className={styles.registerLink}>Нет аккаунта?  <NavLink to={'/auth/register'}>Зарегистрируйтесь здесь.</NavLink> </span>

        </div>
    )
}
