import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Preferiti from './components/Preferiti'



function App() {
  const pageLocalStorage = localStorage.getItem("page") ?? "Home";
  const[currentPage, setCurrentPage] = useState<string>(pageLocalStorage)

  function handlePageChange(page: string) {
    setCurrentPage(page);
    localStorage.setItem("page", page);
  };

  return (
    <>
      <Navbar handlePageChange={handlePageChange} currentPage={currentPage}></Navbar>
      {currentPage === 'Home' && <Home />}
      {currentPage === 'Preferiti' && <Preferiti />}
    </>
  );
}

export default App;
