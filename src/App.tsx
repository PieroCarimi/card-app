import React, { Suspense, lazy, useContext, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { usePage } from './hooks/usePage';


const Favorites = lazy(() => import('./components/Favorites'))

function App() {
  const { currentPage } = usePage();
  console.log(currentPage)
  return (
      <>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
              {currentPage === 'Home' && <Home />}
              {currentPage === 'Favorites' && <Favorites />}
          </Suspense>
      </>
  );
}

export default App;
