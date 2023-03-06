export interface Event {
    id:string;
    name:string;
    description:string;
    category:string;
    location:string;
    likes:number;
    date:string;
    time:string;
    organizer:string;
    dateOfCreation:string;
    imageUrls:string[];
  }

export type PostFormValues = Omit<Event, 'id'>;


