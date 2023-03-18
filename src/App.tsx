import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from './components/layout/main/Layout';
import { EventPage } from './pages/EventsPages/MainEventsPage/EventPage';
import { MainPage } from './pages/Main/MainPage';
import { EventsDetailsPage } from './pages/EventsPages/EventsDetailPage.tsx/EventsDetailsPage';
import { EventDetailsPage } from './pages/EventsPages/EventDetailPage/EventDetailsPage';
import { CreateEventPage } from './pages/CreateEventPage/CreateEventPage';

function App() {
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>}>
      <Route index element={<MainPage />}/>
      <Route path="/events" element={<EventPage />}>
      <Route  path='/events/:category' element={<EventsDetailsPage />}/>
      </Route>
      </Route>
      <Route path="/events/:category/:id" element={<EventDetailsPage />} />
      <Route path="/events/create" element={<CreateEventPage/>}/>

    </>
  )
);

  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
