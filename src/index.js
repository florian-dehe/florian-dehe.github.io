import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import App from './App';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Portfolio from './routes/Portfolio';
import AboutMe from './routes/AboutMe';
import Hobbys from './routes/Hobbys';
import Contact from './routes/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App /> }>
        <Route path="" element={ <Home /> }/>
        <Route path="projects" element={ <Projects /> } />
        <Route path="portfolio" element={ <Portfolio /> } />
        <Route path="about-me" element={ <AboutMe /> } />
        <Route path="hobbys" element={ <Hobbys /> } />
        <Route path="contact" element={ <Contact /> } />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
