import React from 'react';
import './App.css';
import Search from './Components/Search';
import Favourite from './Components/Favourite';
import Modal from './Components/Modal';
import Meals from './Components/Meals';
import { useGlobalContext } from './Context';


function App() {
  const { showModal, favorite } = useGlobalContext()
  return (
    <>
      <Search />
      {favorite.length > 0 && <Favourite />}
      <Meals />
      {showModal && <Modal />}
    </>
  );
}

export default App;
