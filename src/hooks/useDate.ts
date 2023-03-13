

const useDate = (date:string) =>{

    const getWeekMonth = () => {
        const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        let newDate = new Date(date)
        let day = newDate.toISOString().slice(8,10) >= '10' ? newDate.toISOString().slice(8,10) : newDate.toISOString().slice(9,10)
        return `${day} ${month[newDate.getMonth()]}`;
      }
    
    const getTime = () =>{
        let newDate = new Date(date)
        return  `${newDate.getHours()}:${newDate.getMinutes()}`;
    }

    return {getWeekMonth,getTime}
}

export default useDate