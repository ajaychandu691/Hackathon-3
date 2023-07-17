import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import NewReleases from './NewReleases';
import WhatsHot from './WhatsHot';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/new' element={<NewReleases />} />
        <Route path='/hot' element={<WhatsHot />} />
        <Route path='/' element={<div>Home Page - You might want to set up a landing page or redirect to either /new or /hot</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
