export interface Events {
  id:string;
  name:string;
  description:string;
  category?:string;
  location?:string;
  likes?:number;
  dateTime:string;
  organizer?:string;
  dateOfCreation?:string;
  imageUrls:string[];
}

export type PostFormValues = Omit<Events, 'id'>;





export type commets = {
  id?:string;
  eventId?:string;
  message:string
  dateOfCreation?:string;
}