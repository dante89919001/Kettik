import { Controller, useForm } from 'react-hook-form';
import { FormEvent, useState } from 'react';
import { authService } from './index';
import { useUserContext } from './UserContext';
import './form.css';

/*Надо добавть ссылку для роутера на 62 строчке*/

type Props = {};
type LoginForm = {
    username: string;
    password: string;
  };

const Loginme =(props: Props) => {

const { register: loginRegister, getValues: loginGetValues, formState:{errors, isValid, isSubmitSuccessful} } =
    useForm<LoginForm>({
      defaultValues: {
        username: '',
        password: '',
      },
    });


  const { changeUsername } = useUserContext();

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    authService
      .login({
        password: loginGetValues('password'),
        username: loginGetValues('username'),
      })
      .then((r) => {
        authService.persistTokens(r);
        return authService.getProfile();
      })
      .then((r) => {
        authService.persistProfile(r);
        changeUsername(r.email);
      })
      .catch((e) => {
        alert(e.response?.data?.message);
      });
  };

  return (
    <div className="log-in">
        <form className="form" onSubmit={handleLoginSubmit}>
        <h2>Добро пожаловать</h2>
        <div>Найдите то, что Вам подходит больше всего</div>
        <input type = "text" {...loginRegister("username", { required:  "Необходимо заполнить поле имя"})} 
        placeholder="User1003" />
        <div>{errors?.username &&<p className='instructions'>{errors?.username.message}</p>}</div>

        <input type="password" {...loginRegister('password', 
        {required: "Пожалуйста введите пароль"})} placeholder="Пароль"/>
        <div>{errors?.password &&<p className='instructions'>{errors?.password.message}</p>}</div>

        <button type="submit" disabled={!isValid}>Вперед</button>
        <div>Нет аккаунта? <a href ="#">Зарегистрируйтесь здесь</a></div>
        </form>
        </div>
  );
};

export default Loginme;