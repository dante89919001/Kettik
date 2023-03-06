import axios from 'axios';

const REACT_APP_API_ROOT = 'back'

const mockData = {
    "id": "A8zHrIYB3WQ7nRAwUeYt",
    "name": "Music Festival",
    "description": "A music festival featuring local bands",
    "category": "EDUCATIONAL",
    "location": "Central Park",
    "likes": 0,
    "date": "2023-03-08",
    "time": "21.49",
    "organizer": "John Doe",
    "dateOfCreation": "2023-03-04T19:19:49.023",
    "imageUrls": [
        "/home/ragemouse11/event-manager-datastore/ohz1936_nachrenovation.0x800.jpg",
        "/home/ragemouse11/event-manager-datastore/images.jpeg",
        "/home/ragemouse11/event-manager-datastore/Teatro dell'Opera di Roma_ph Yasuko Kageyama-Teatro dell'Opera di Roma 2018_6964 WEB.jpg",
        "/home/ragemouse11/event-manager-datastore/zurich_theater.jpg",
        "/home/ragemouse11/event-manager-datastore/wp2028756.jpg"
    ]
}



export const getEvents = () => {
    return axios
      .get<Event[]>(`${REACT_APP_API_ROOT}/events`, {})
      .then((res) => res.data);
  };


export const getEvent = (id:string) =>{
    return axios
        .get<Event>(`${REACT_APP_API_ROOT}/events/id`, {})
        .then((res)=>res.data);
}

export const createEvent = (data:Event) => {
    return axios
      .post(`${REACT_APP_API_ROOT}/events`, data)
      .then((res) => res.data);
  };
  

  export const updateEvent = (id: string, data:Event) => {
    return axios
      .put(`${REACT_APP_API_ROOT}/events/${id}`, data)
      .then((res) => res.data);
  };
  