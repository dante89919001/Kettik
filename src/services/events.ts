import axios from 'axios';
import { commets, Events } from '../types/event';

const REACT_APP_API_ROOT = 'back'

const COMMENT_APP_API_ROOT = 'http://localhost:8080/comment-api'

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


  export const getEvents = (filter:string) => {
    return axios
      .get(`${REACT_APP_API_ROOT}/event/${filter}`, {})
      .then((res) => res.data)
      .then<Events[]>((res)=>res.content)

  };




export const getEvent = (id:string) =>{
    return axios
        .get<Events>(`${REACT_APP_API_ROOT}/event/${id}`, {})
        .then((res)=>res.data);
}

export const createEvent = (data:Events) => {
    return axios
      .post(`${REACT_APP_API_ROOT}/event`, data)
      .then((res) => res.data);
  };

  export const updateEvent = (id: string, data:Events) => {
    return axios
      .put(`${REACT_APP_API_ROOT}/event/${id}`, data)
      .then((res) => res.data);
  };

  export const deleteEvent = (id:string) =>{
    return axios
        .delete<Events>(`${REACT_APP_API_ROOT}/event/${id}`, {})
        .then((res)=>res);
}


  export const getComments = (id:string) => {
    return axios
      .get(`${COMMENT_APP_API_ROOT}/event/${id}/comment/all`, {})
      .then((res) => res.data)
      .then<commets[]>((res)=>res.content)

  };

  export const createComment = (id:string,data:commets) => {
    return axios
      .post(`${COMMENT_APP_API_ROOT}/event/${id}/comment`, data)
      .then((res) => res.data);
  };
  