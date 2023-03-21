import { useEffect, useState } from "react";
import { getEvents, temp } from "../services/events";
import { Events } from "../types/event";


const useRequire = (filter:string, size:string = 'size=8') => {

    const [events,setEvents] = useState<Events[]>([]);
    const [url,setUrl] = useState(filter);

    useEffect(()=>{
        getEvents(`${url}?${size}`).then((res)=>{
            setEvents(res);

        });

    },[url])

    const handleChangeFilter =(url:string) =>{
            setUrl(url)
            
    }

    return {events,url,handleChangeFilter,setEvents};
}

export default useRequire;