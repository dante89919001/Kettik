const getDate = (date:string) => {
    let newDate = new Date(date)
    return `${newDate.toISOString().slice(0,10)}`;
  }

export default getDate;