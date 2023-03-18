import { useEffect, useState } from "react";
import { getEvents } from "../services/events";
import { Events } from "../types/event";


const useRequire = (filter:string) => {

    const [events,setEvents] = useState<Events[]>([]);
    const [url,setUrl] = useState(filter);

    useEffect(()=>{
        getEvents(`${url}?size=8`).then((res)=>{
                setEvents(res);
        });
        
    },[url])

    const handleChangeFilter =(url:string) =>{
            setUrl(url)
    }

    return {events,url,handleChangeFilter};
}

export default useRequire;