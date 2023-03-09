import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { EventList } from './components/Events/eventList/EventList';
import { Main } from './components/layout/main/Main';
import { EventPage } from './pages/EventPage/EventPage';

function App() {
 
/*  
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main/>}>
      <Route path="/Event" element={<EventPage />} />
      </Route>
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
