import React, { Suspense, lazy, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { AppProvider } from './Context';

const Favorites = lazy(() => import('./components/Favorites'))

function App() {
  const pageLocalStorage = localStorage.getItem("page") ?? "Home";
  const[currentPage, setCurrentPage] = useState<string>(pageLocalStorage)

  function handlePageChange(page: string): void {
    setCurrentPage(page);
    localStorage.setItem("page", page);
  };

  return (
    <AppProvider currentPage={pageLocalStorage}>
      <Navbar handlePageChange={handlePageChange} currentPage={currentPage}></Navbar>
      <Suspense fallback={<div>Loading...</div>}>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'Favorites' && <Favorites />}
      </Suspense>
    </AppProvider>
  );
}

export default App;
