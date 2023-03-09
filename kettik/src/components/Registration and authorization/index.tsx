import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthService } from './auth';

export const authService = AuthService.createInstance({
  griffonApiRoot: process.env.REACT_APP_GRIFFON_ROOT as string,
  griffonClientId: process.env.REACT_APP_GRIFFON_CLIENT_ID as string,
  griffonClientSecret:
    'CCgNJy2h5LTlzpnCeJSmHqi-qg8Qo6ii3TbSlfwCfBfpRKu0q0Mw4jWBVjlJWE3u',
  griffonBucketId: '5de65364-976a-4a9e-8953-99bc08fc4bb0',

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
