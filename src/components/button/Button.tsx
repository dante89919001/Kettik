import styles from './Button.module.css'

type Props={
    text:string;
    isActive?:boolean;
    onClick?:(text:string)=>void;
    width?:number;
    disable?:boolean;
}

export const Button:React.FC<Props> = ({text ,isActive = false,onClick ,width , disable}) =>{
    const handlerAlertsClick =(e: EventTarget & HTMLButtonElement) =>{
            if(onClick){
                onClick(e.children[0].innerHTML)
            }
    };
    return (
        <button style={{maxWidth:`${width}px`}} className={isActive ? `${styles.btn} ${styles.active}` : styles.btn }  onClick={(e) => {handlerAlertsClick(e.currentTarget)}} disabled={disable}>
               <p  className={isActive ? `${styles.btnText} ${styles.active}` : styles.btnText}>{text}</p> 
        </button>
    )
} 