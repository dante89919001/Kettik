import styles from './Button.module.css'

type Props={
    text:string;
    isActive?:boolean;
}

export const Button:React.FC<Props> = ({text ,isActive = false}) =>{

    return (
        <button className={isActive ? `${styles.btn} ${styles.active}` : styles.btn }>
               <p  className={isActive ? `${styles.btnText} ${styles.active}` : styles.btnText}>{text}</p> 
        </button>
    )
} 