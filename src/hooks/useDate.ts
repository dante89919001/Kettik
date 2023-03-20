import { useMemo } from 'react';

const useDate = (date: string) => {
  const time = useMemo(() => {
    const newDate = new Date(date);
    return `${newDate.getHours()}:${newDate.getMinutes()}`;
  }, [date]);

  return { time };
};

export default useDate;
