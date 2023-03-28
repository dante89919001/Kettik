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
import { AuthPage } from './pages/AuthPage/AuthPage';
import { LoginForm } from './components/Forms/LoginForm/LoginForm';
import { RegisterForm } from './components/Forms/RegisterForm/RegisterForm';
import { UserContextProvider, useUserContext } from './providers/UserContext';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { RequireAuth } from './Utils/RequireAuth';
import AboutTeam from './pages/Team/AboutTeam';

function App() {    
  
  


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>}>
      <Route index element={<MainPage />}/>
      <Route path="/events" element={<EventPage />}>
      <Route  index  element={<EventsDetailsPage />}/>
      <Route  path='/events/:category'  element={<EventsDetailsPage />}/>
      </Route>
        <Route path="/profile"  element={
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        }/>
        <Route path="/about" element={<AboutTeam />}/>

      </Route>
      <Route path="/events/:category/:id" element={<EventDetailsPage />} />
      <Route path="/events/create" element={
  
        <CreateEventPage />
      
        }/>
      <Route path="/auth" element={<AuthPage />}>
      <Route index  element={<LoginForm />}/>
      <Route path="/auth/register"  element={<RegisterForm />}/>
      </Route>

    </>
  )
);

  return (

    <UserContextProvider> 
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </UserContextProvider>
  );


}

export default App;
