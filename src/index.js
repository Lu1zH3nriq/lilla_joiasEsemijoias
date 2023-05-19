import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylles/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/homePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage/>
  </React.StrictMode>
);
