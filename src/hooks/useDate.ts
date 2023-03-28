import { useMemo } from 'react';

const useDate = (date: string) => {
  
  const time = useMemo(() => {
    const newDate = new Date(date);
    const min = newDate.getMinutes().toString();
    let hour = newDate.getHours().toString();
    
    if(+hour < +'10'){
      hour = `0${hour}`
    }
    return `${hour}:${min}`;
  }, [date]);

  return { time };
};

export default useDate;
