import React, { Suspense, lazy, useContext, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { AppContext, AppProvider } from './Context';


const Favorites = lazy(() => import('./components/Favorites'))

function App() {
  const { currentPage } = useContext(AppContext);
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
