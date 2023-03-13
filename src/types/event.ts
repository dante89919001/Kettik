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

export type PostFormValues = Omit<Event, 'id'>;

