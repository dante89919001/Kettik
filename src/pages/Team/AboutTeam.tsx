import styles from './AboutTeam.module.css'



function Team() { 

    return( 
         <div className={styles.back}> 
            <p className={styles.title}>ИНФОРМАЦИОННЫЙ ПОРТАЛ</p>
            <div className={styles.images}>
                    <img src = '/assets/about/page1.jpg' className={styles.img}/>
                    <img src = '/assets/about/page2.jpg' className={styles.img}/>
                    <img src = '/assets/about/page3.jpg' className={styles.img}/>
            </div>
            <div className={styles.description}>
                <h2 className={styles.aboutTitle}>O проекте</h2>
                <p> "Кеттик - это место, где мы собираем все самые яркие, интересные и
                    запоминающиеся события, чтобы наши подписчики могли наслаждаться
                    максимальным разнообразием развлечений и отдыха.
                </p>
                <p>
                Мы создаем мероприятия, которые объединяют людей разных возрастов
                и интересов, чтобы создать атмосферу взаимопонимания и
                сотрудничества.
                </p>
            </div>
            <p className={styles.title}>ПРО КОМАНДУ</p>
            <div className={styles.team}>
                <figure>
                    <img src='/assets/about/Kuralai.jpg' className={styles.person} />
                    <figcaption >Куралай веб-дизайнер</figcaption>
                </figure>
                <figure>
                    <img src='/assets/about/Асия.jpg' className={styles.person} />
                    <figcaption>Асия веб-дизайнер</figcaption>
                </figure>
                <figure>
                    <img src ='/assets/about/Daniil.jpg' className={styles.person}/>
                    <figcaption>Даниил Back-end разработчик</figcaption>
                </figure>
                <figure>
                    <img src ='/assets/about/Ivan.jpg' className={styles.person}/>
                    <figcaption>Иван Front-end разработчик</figcaption>
                </figure>
                <figure>
                    <img src ='/assets/about/Anel.jpg' className={styles.person}/>
                    <figcaption>Анелия Front-end </figcaption>
                </figure>
                <figure>
                    <img src ='/assets/about/Kamila.jpg' className={styles.person}/>
                    <figcaption>Камила Бизнес Аналитик</figcaption>
                </figure>   
                <figure>
                    <img src ='/assets/about/Asel.jpg' className={styles.person}/>
                    <figcaption>Асель Front-end </figcaption>
                </figure>
                <figure>
                    <img src ='/assets/about/assol.jpg' className={styles.person}/>
                    <figcaption>Ассоль Front-end </figcaption>
                </figure>
            </div>
            <div className={styles.description}>
                <h2 className={styles.aboutTitle}>O нас</h2>
                <p>Мы - Кеттик, команда профессионалов, 
                занимающихся созданием самого удобного и 
                интересного ивент-сайта для пользователей. 
                Наша цель - помочь людям находить
                интересные мероприятия в своем городе и 
                облегчить им процесс планирования своих
                свободных дней.
                </p>
                <p>
                Мы верим, что ивенты и мероприятия - это не 
                только отличный способ провести время, но и 
                возможность расширить круг общения, 
                научиться чему-то новому и найти вдохновение. 
                Мы надеемся, что наш сайт поможет вам найти 
                интересные мероприятия и создаст у вас 
                незабываемый опыт.  
                </p>
            </div>
        </div>    
    ) 
} 
 
export default Team;

  
