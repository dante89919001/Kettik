import styles from './Button.module.css'

type Props={
    text:string;
    isActive?:boolean;
    onClick?:(text:string)=>void;
    width?:number;
    disable?:boolean;
    type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button:React.FC<Props> = ({text ,isActive = false,onClick ,width , disable,type}) =>{
    const handlerAlertsClick =(e: EventTarget & HTMLButtonElement) =>{
            if(onClick){
                onClick(e.children[0].innerHTML)
            }
    };
    return (
        <button style={{maxWidth:`${width}px`}} className={isActive ? `${styles.btn} ${styles.active}` : styles.btn }  onClick={(e) => {handlerAlertsClick(e.currentTarget)}} disabled={disable} type={type}>
               <p  className={isActive ? `${styles.btnText} ${styles.active}` : styles.btnText}>{text}</p> 
        </button>
    )
} 