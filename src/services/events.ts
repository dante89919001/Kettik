import axios from 'axios';
import { commets, Events } from '../types/event';

const eventApi = process.env.REACT_APP_API_ROOT_EVENT as string;

const commentApi = process.env.REACT_APP_API_ROOT_COMMENT as string;

export const getEvents = (filter: string) => {
    return axios
        .get(`${eventApi}/event/${filter}`, {})
        .then((res) => res.data)
        .then<Events[]>((res) => res.content);
};

export const getEvent = (id: string) => {
    return axios
        .get<Events>(`${eventApi}/event/${id}`, {})
        .then((res) => res.data);
};

export const createEvent = (data: FormData) => {
    return axios.post(`${eventApi}/event`, data).then((res) => res);
};

export const updateEvent = (id: string, data: Events) => {
    return axios.put(`${eventApi}/event/${id}`, data).then((res) => res.data);
};

export const deleteEvent = (id: string) => {
    return axios
        .delete<Events>(`${eventApi}/event/${id}`, {})
        .then((res) => res);
};

export const getComments = (id: string) => {
    return axios
        .get(`${commentApi}/event/${id}/comment/all`, {})
        .then((res) => res.data)
        .then<commets[]>((res) => res.content);
};

export const createComment = (id: string, data: commets) => {
    return axios
        .post(`${commentApi}/event/${id}/comment`, data)
        .then((res) => res.data);
};

export const temp = [
    {
        id: 'AANd2ds4YdsaBtFDbdsaKLnbdsadSSpV',
        name: 'Music Festival',
        description: 'A music festival featuring local bands',
        category: 'EDUCATIONAL',
        location: 'Central Park',
        likes: 0,
        dateTime: '2023-03-15T16:30',
        userEmail: 'John Doe',
        dateOfCreation: '2023-03-13T20:26:09.310',
        imageUrls: ['/assets/KETTIK.svg'],
    },
    {
        id: 'AANd24YdsaBtFDbdsaKLnbdsadSSpV',
        name: 'Music Festival',
        description: 'A music festival featuring local bands',
        category: 'EDUCATIONAL',
        location: 'Central Park',
        likes: 0,
        dateTime: '2023-03-11T16:30',
        userEmail: 'John Doe',
        dateOfCreation: '2023-03-13T20:26:09.310',
        imageUrls: ['/assets/KETTIK.svg'],
    },

    {
        id: 'AANd24YBtFDdsabdsaKLnbdsadSSpV',
        name: 'DADSDA321',
        description: 'A music festival featuring local bands',
        category: 'EDUCATIONAL',
        location: 'Central Park',
        likes: 0,
        dateTime: '2023-03-21T16:30',
        userEmail: 'dias@mail.ru',
        dateOfCreation: '2023-03-13T20:26:09.310',
        imageUrls: ['/assets/KETTIK.svg'],
    },

    {
        id: 'AANd24YBtFDbdsdsafgaKLnbdsadSSpV',
        name: 'dasdasd',
        description: 'A music festival featuring local bands',
        category: 'EDUCATIONAL',
        location: 'Central Park',
        likes: 0,
        dateTime: '2023-03-11T16:30',
        userEmail: 'dias@mail.ru',
        dateOfCreation: '2023-03-13T20:26:09.310',
        imageUrls: ['/assets/KETTIK.svg'],
    },
];
