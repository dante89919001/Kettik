import styles from './Button.module.css'

type Props={
    text:string;
    isActive?:boolean;
    onClick?:(text:string)=>void;
}

export const Button:React.FC<Props> = ({text ,isActive = false,onClick}) =>{
    const handlerAlertsClick =(e: EventTarget & HTMLButtonElement) =>{
            if(onClick){
                onClick(e.children[0].innerHTML)
            }
    };
    return (
        <button className={isActive ? `${styles.btn} ${styles.active}` : styles.btn }  onClick={(e) => {handlerAlertsClick(e.currentTarget)}}>
               <p  className={isActive ? `${styles.btnText} ${styles.active}` : styles.btnText}>{text}</p> 
        </button>
    )
} 