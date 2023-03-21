import { commets } from '../../../types/event';
import { CreateComment } from '../CreateComment/CreateComment';
import styles from './CommentList.module.css'

type Props ={
    comments:commets[]
}

export const CommentList:React.FC<Props> = ({comments}) =>{
    return(
        <div className={styles.CommentListContainer}>
              {comments?.map((comment)=>{
                            return <CreateComment message={comment.message} dateOfCreation={comment.dateOfCreation||''}/>
                    })}
        </div>
    )
}

