import { useMemo } from 'react';
import useDate from '../../../hooks/useDate';
import getWeekMonth from '../../../Utils/getWeekMoth';
import styles from './CreateComment.module.css'

type Props = {
    id?:string;
    eventId?:string;
    message:string;
    dateOfCreation:string;
}

export const CreateComment:React.FC<Props> = ({message,dateOfCreation}) =>{
    const {time} = useDate(dateOfCreation);


    const date = useMemo(() => {
        const WeekMonth = getWeekMonth(dateOfCreation)
        const Year = dateOfCreation.slice(0,4);
        return `${WeekMonth} ${Year} в ${time}`
        },[dateOfCreation]);
     

    return(
        <div className={styles.CommentContainer}>
            <p className={styles.CommentMessage}>{message}</p>
            <p className={styles.Commentdate}> {date}</p>
        </div>
    )
}
