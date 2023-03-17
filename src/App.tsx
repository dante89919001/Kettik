import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from './components/layout/main/Layout';
import { SportEventsPage } from './pages/EventsPages/SportEventsPage/SportEventsPage';
import { EducationEventsPage } from './pages/EventsPages/EducationEventsPage/EducationEvenetsPage';
import { EventPage } from './pages/EventsPages/MainEventsPage/EventPage';
import { CultureEventsPage } from './pages/EventsPages/CultureEventsPage/CultureEventsPage';
import { PopularEventsPage } from './pages/EventsPages/PopularEventsPage/PopularEventsPage';
import { LastEventsPage } from './pages/EventsPages/LastEventsPage/LastEventsPage';
import { MainPage } from './pages/Main/MainPage';
import EventsDetailsPage from './pages/EventsPages/EventsDetailPage/EventsDetailsPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/events" element={<EventPage />}>
            <Route index element={<LastEventsPage />} />
            <Route path="/events/popular" element={<PopularEventsPage />} />
            <Route path="/events/sport" element={<SportEventsPage />} />
            <Route path="/events/education" element={<EducationEventsPage />} />
            <Route path="/events/culture" element={<CultureEventsPage />} />
          </Route>
        </Route>
        <Route path="/events/:id" element={<EventsDetailsPage />} />
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
