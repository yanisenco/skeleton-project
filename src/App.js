import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/homePage/homePage';
import LinkPage from './page/linkPage/linkPage';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Link" element={<LinkPage />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;