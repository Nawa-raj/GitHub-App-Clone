import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'styles/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter basename='GitHub-App-Clone'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
