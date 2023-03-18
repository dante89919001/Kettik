export interface Events {
  id:string;
  name:string;
  description:string;
  category?:string;
  location?:string;
  likes?:number;
  dateTime:string;
  userEmail?:string;
  dateOfCreation?:string;
  imageUrls:string[];
}

export type PostFormValues = Omit<Events, 'id' | 'dateOfCreation'  | 'likes'>;

export interface SignUpForm {
  name:string;
  description:string;
  category?:string;
  location:string;
  date:string;
  organizer?:string;
  time:string;
  imageUrls:string[];
}

export type commets = {
  id?:string;
  eventId?:string;
  message:string
  dateOfCreation?:string;
}