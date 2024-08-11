import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

var baseName = "/";
if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  baseName = "GitHub-App-Clone";
}


root.render(
  <React.StrictMode>
    <BrowserRouter basename={baseName}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();



// git demo added.