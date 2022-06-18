import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from "./Routes/Routes";
import { AuthGoogleProvider } from './lib/authentication';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthGoogleProvider>
      <Routes/>
    </AuthGoogleProvider>
    
  </React.StrictMode>
);


