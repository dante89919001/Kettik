import { Controller, useForm } from 'react-hook-form';
import { FormEvent, useState } from 'react';
import { authService } from './index';
import { useUserContext } from './UserContext';
import './form.css';

/*Надо добавть ссылку для роутера на 98 строчке*/


type Props = {};

type SignUpForm = {
  username: string;
  email:string;
  password: string;
  confirmPassword: string;
};

type VerifyForm = {
  otp: string;
};

const Regme = (props: Props) => {
  const [sid, setSid] = useState('');
  const { register, getValues, formState:{errors, isValid, isSubmitSuccessful}, watch} = useForm<SignUpForm>({
  mode :'onBlur'});

  
  const { register: verifyRegister, getValues: verifyGetValues } =
    useForm<VerifyForm>({
      defaultValues: {
        otp: '',
      },
    });

  const handleSignupSubmit = (e: FormEvent) => {
      e.preventDefault();
      const username = getValues('username');
      const email = getValues('email');
      const password = getValues('password')
      const confirmPassword = getValues('confirmPassword')
      if (password !== confirmPassword) { 
        alert("Пароли не совпадают")
        return
      }
      authService
        .checkIfUserExists(username).then((resp) => {
          // if resp.data === true 
          if (resp.data)  {
            // user exists and don't do anything
            alert("Пользователь с таким именем уже существует")
          } else {
            // user doesn't exist and do sign up
            authService
            .signUp(username)
            .then((r) => {
              setSid(r.sid);
              authService.
                register(password, r.sid)
                .then((r) => {
                  console.log(r);
                  authService.persistTokens(r);
                })
            })
            .then((r) => {
              console.log(r);
            });
          }
      })
      console.log(username);
      console.log(email);
      authService
        .signUp(username)
        .then((r) => {
          setSid(r.sid);
        })
        .then((r) => {
          console.log(r);
        });
    };

  const handleVerifySubmit = (e: FormEvent) => {
    e.preventDefault();
    const otp = verifyGetValues('otp');
    console.log(otp);
    authService
      .sendOtp(otp, sid)
      .then((r) => {
        console.log(r);
        return authService.register(sid, getValues('password'));
      })
      .then((r) => {
        console.log(r);
        authService.persistTokens(r);
      });
  };

  return (
    <div className="register">
      <form className="form" onSubmit={handleSignupSubmit}>
         <h2>Добро пожаловать</h2>
        <div>Найдите то, что Вам подходит больше всего</div>
        <input type = "text" {...register("username", { required:  "Необходимо заполнить поле имя" , 
        minLength: {value: 6, message:"Имя должно содержать от 6 до 20 символов" } , maxLength: 20 })} 
        placeholder="User 1003" />
        <div>{errors?.username &&<p className='instructions'>{errors?.username.message}</p>}</div>

        <input type="email" {...register('email', {
        required: "Пожалуйста введите email", pattern: 
        {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 
        "Пожалуйста введите действительный email!"}})}  placeholder="hello@gmail.com" />
        <div>{errors?.email &&<p className='instructions'>{errors?.email.message}</p>}</div>

        <input type="password" {...register('password', 
        {required: "Пожалуйста введите пароль", pattern: {value: 
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i, message: 
        "Минимум восемь символов, минимум одна буква, одна цифра и один специальный символ"
        }})} placeholder="Пароль"/>
        <div>{errors?.password &&<p className='instructions'>{errors?.password.message}</p>}</div>

        <input {...register("confirmPassword", {validate: (match) => {
            const password = getValues("password")
            return match === password || "Пароли должны соответсвовать"
        }})} type="password" />
        <div>{errors?.confirmPassword &&<p className='instructions'>{errors?.confirmPassword.message}</p>}</div>

       <button type="submit" disabled={!isValid}>Регистрация</button>
       <div>Есть аккаунт? <a href ="#">Войдите здесь</a></div>
       </form>

       <div>{isSubmitSuccessful && <form className="Verify__form" onSubmit={handleVerifySubmit}>
        <label>Код подтверждения<input type="text" {...verifyRegister('otp')} /></label>
        <button type="submit" >Отправить код подтверждения</button>
      </form>}</div>

    </div>
  );
};

export default Regme;
