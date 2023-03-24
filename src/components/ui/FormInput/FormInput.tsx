import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';

import styles from './FormInput.module.css';

type Props = {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value: string | string[];
  onChange?: (v: ChangeEvent ) => void;
  className?: string
  id?:string
  multiple?: boolean
  classNameLabel?:string;
  handlChange?:  (v: ChangeEvent ) => void;
};

export const FormInput: React.FC<Props> = ({
  label,
  name,
  type,
  onChange,
  value,
  placeholder,
  id,
  className ,
  classNameLabel = "FormInput__label",
  handlChange,
}) => {
  const changeEvents = (e:ChangeEvent) =>{
    if(onChange){
      onChange(e)
    }
    if(handlChange){
      handlChange(e)
    }
  }

  return (
    <div className={styles.FormInput__formControl}>
      <label className={classNameLabel} >{label}</label>
      <input
        placeholder={placeholder}
        className={className?className:styles.FormInput__input}
        name={name}
        type={type}
        onChange={(e:ChangeEvent)=>{changeEvents(e)}}
        value={value}
      />
    </div>
  );
};

export const FormInputFile: React.FC<Props> = ({
  label,
  name,
  type,
  onChange,
  value,
  placeholder,
  id,
  className ,
  classNameLabel = "FormInput__label",
  handlChange,
}) => {
  const changeEvents = (e:ChangeEvent) =>{
    if(onChange){
      onChange(e)
    }
    if(handlChange){
      handlChange(e)
    }
  }



  return (
    <div className={styles.FormInputFileContainer}>
      <label className={classNameLabel} > 
      <p className={''}>{label}</p>
      <input
        placeholder={placeholder}
        className={className?className:styles.FormInput__input}
        name={name}
        type={type}
        onChange={(e:ChangeEvent)=>{changeEvents(e)}}
        value={value}
      />
  
      </label>
    </div>
  );
};


export const FormInputPassword: React.FC<Props> = ({
  label,
  name,

  onChange,
  value,
  placeholder,
  id,
  className ,
  classNameLabel = "FormInput__label",
  handlChange,
}) => {
  const changeEvents = (e:ChangeEvent) =>{
    if(onChange){
      onChange(e)
    }
    if(handlChange){
      handlChange(e)
    }
  }
  const [isVisible,setIsVisible] = useState(false)
  const [type,setType] = useState('password')
  const handleVisible =() =>{
      if(isVisible){
        setType('password');
        setIsVisible(false);
      }else{
        setType('text');
        setIsVisible(true);
      }
      
  }
  return (
    <div className={styles.FormInput__formControl}>
      <label className={classNameLabel} >{label}</label>
      
      <input
        placeholder={placeholder}
        className={className?className:styles.FormInput__input}
        name={name}
        type={type}
        onChange={(e:ChangeEvent)=>{changeEvents(e)}}
        value={value}
      />
      <img src="/assets/form/eye.svg" alt="eye" onClick={handleVisible} className={styles.eye} />
    
   
    </div>
  );
};