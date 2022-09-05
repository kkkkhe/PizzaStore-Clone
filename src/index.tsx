import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './reduxStore/redux-store';
import { Provider } from 'react-redux';
import {  BrowserRouter,Routes,Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


console.log(2)
root.render(
  <Provider store={store()}>
      <BrowserRouter>
     <App />
     </BrowserRouter>
  </Provider>
   
);

reportWebVitals();
