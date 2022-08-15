import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

// React router
import { HashRouter, Routes, Route } from "react-router-dom";

// Routes
import App from './App';
import Home from './routes/Home';
import Projects from './routes/Projects';
import AboutMe from './routes/AboutMe';
import Hobbies from './routes/Hobbies';
import Contact from './routes/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={ <App /> }>
        <Route path="" element={ <Home /> }/>
        <Route path="projects" element={ <Projects /> } />
        <Route path="about-me" element={ <AboutMe /> } />
        <Route path="hobbies" element={ <Hobbies /> } />
        <Route path="contact" element={ <Contact /> } />
      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
