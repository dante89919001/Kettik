import axios from 'axios';
import { commets, Events, PostFormValues } from '../types/event';

const REACT_APP_API_ROOT = 'https://event.dar-dev.zone/api/v1/event-api'

const  REACT_APP_API_ROOT_COMMENT_API = 'http://localhost:8080/comment-api'


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

export const createEvent = (data:FormData) => {

    

    return axios
      .post(`${REACT_APP_API_ROOT}/event`,{
        data,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => res);
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
      .get(`${REACT_APP_API_ROOT_COMMENT_API}/event/${id}/comment/all`, {})
      .then((res) => res.data)
      .then<commets[]>((res)=>res.content)

  };

  export const createComment = (id:string,data:commets) => {
    return axios
      .post(`${REACT_APP_API_ROOT_COMMENT_API}/event/${id}/comment`, data)
      .then((res) => res.data);
  };
  