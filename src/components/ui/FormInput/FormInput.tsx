import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';

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