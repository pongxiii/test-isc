import './App.css';
import React from 'react';
import SideBar from './components/SideBar';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';
import ContentPage from './components/ContentPage';
import Paginate from './components/Paginate';
import { Route, Routes } from 'react-router-dom';
import PageRestaurant from './components/PageRestaurant';
import Page404 from './components/Page404';

function App() {
  return (
    <div className='App'>
      <div className='nav'>
        <section className='header'>
          <AppHeader />
        </section>
        <section className='side-bar'>
          <SideBar />
        </section>
      </div>


      <div className='search-bar'>
        <Routes>
          <Route path='/' element={<SearchBar />} />
        </Routes>

      </div>

      <div className='content'>
        <Routes>
          <Route path='/' element={<ContentPage />} />
          <Route path='/restaurant/:restID' element={<PageRestaurant/>}/>
          <Route path='/*' element={<Page404/>}/>
        </Routes>
      </div>
      <br></br>
      <div className='footer'>
        <Routes>
          <Route path='/' element={<Paginate />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
