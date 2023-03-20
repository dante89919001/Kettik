
const getTime = (date:string) =>{
    let newDate = new Date(date)
    return  `${newDate.getHours()}:${newDate.getMinutes()}`;
}

export default getTime


