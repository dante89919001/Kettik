import axios from 'axios';

const REACT_APP_API_ROOT = 'back'

export const temp =[
    {
        id: "AANd2ds4YdsaBtFDbdsaKLnbdsadSSpV",
        name: "Music Festival",
        description: "A music festival featuring local bands",
        category: "EDUCATIONAL",
        location: "Central Park",
        likes: 0,
        dateTime: "2023-03-11T16:30",
        organizer: "John Doe",
        dateOfCreation: "2023-03-13T20:26:09.310",
        imageUrls: [
            "/assets/KETTIK.svg"     
           ]
    },
    {
        id: "AANd24YdsaBtFDbdsaKLnbdsadSSpV",
        name: "Music Festival",
        description: "A music festival featuring local bands",
        category: "EDUCATIONAL",
        location: "Central Park",
        likes: 0,
        dateTime: "2023-03-11T16:30",
        organizer: "John Doe",
        dateOfCreation: "2023-03-13T20:26:09.310",
        imageUrls: [
            "/assets/KETTIK.svg"     
           ]
    },
  
    {
        id: "AANd24YBtFDdsabdsaKLnbdsadSSpV",
        name: "Music Festival",
        description: "A music festival featuring local bands",
        category: "EDUCATIONAL",
        location: "Central Park",
        likes: 0,
        dateTime: "2023-03-11T16:30",
        organizer: "John Doe",
        dateOfCreation: "2023-03-13T20:26:09.310",
        imageUrls: [
            "/assets/KETTIK.svg"     
           ]
    },

    {
        id: "AANd24YBtFDbdsdsafgaKLnbdsadSSpV",
        name: "Music Festival",
        description: "A music festival featuring local bands",
        category: "EDUCATIONAL",
        location: "Central Park",
        likes: 0,
        dateTime: "2023-03-11T16:30",
        organizer: "John Doe",
        dateOfCreation: "2023-03-13T20:26:09.310",
        imageUrls: [
            "/assets/KETTIK.svg"     
           ]
    }
    
  ]


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
  