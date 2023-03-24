import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthService } from './services/auth';

export const authService = AuthService.createInstance({
  griffonApiRoot: process.env.REACT_APP_GRIFFON_ROOT as string,
  griffonClientId: process.env.REACT_APP_GRIFFON_CLIENT_ID as string,
  griffonClientSecret:process.env.REACT_APP_GRIFFON_CLIENT_SECRET as string,
  griffonBucketId: process.env.REACT_APP_GRIFFON_BUCKET_ID as string,
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
