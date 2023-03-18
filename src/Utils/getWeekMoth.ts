

 const getWeekMonth = (date:string) => {
    const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    let newDate = new Date(date)
    let day = newDate.toISOString().slice(8,10) >= '10' ? newDate.toISOString().slice(8,10) : newDate.toISOString().slice(9,10)
    return `${day} ${month[newDate.getMonth()]}`;
  }

export default getWeekMonth;