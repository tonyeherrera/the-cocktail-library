import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import './styles.css';
import App from './App';
import reportWebVitals from './components/reportWebVitals';
import { DataContextProvider } from './context/dataContext';
import { UserContextProvider } from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Router>
       <DataContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </DataContextProvider>
    </Router>
  
);
 
reportWebVitals();
