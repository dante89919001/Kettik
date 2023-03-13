import { useEffect, useState } from "react";
import { getEvents } from "../services/events";


const useRequire = (filter:string) => {

    const [events,setEvents] = useState<Event[]>([]);
    const [url,setUrl] = useState(filter);

    useEffect(()=>{
        getEvents().then((res)=>{
                setEvents(res);
        });
        
    },[url])

    const handleChangeFilter =(url:string) =>{
            setUrl(url)
    }

    return {events,url,handleChangeFilter};
}

export default useRequire;