import Calendar from 'react-calendar';
import styles from './Calendar.module.css'

type Props  = {
    onChange : (v:Date) => void;
}

export const MainCalendar:React.FC<Props> = ({onChange}) => {

    return (
        <div className={styles.CalendarContainer}>
            <h2 className={styles.CalendarTitle}>
                Выберите Дату
            </h2>
            <Calendar className={styles.Calendar}  onChange={onChange} />
        </div>    
    )
}