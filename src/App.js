import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Company from './Company';
import House from './House';
import Interiors from './Interiors';


function App() {
  return (
    <div className="App">
      <header>
      <div className='headerLeft'>
        <img width={200} height={100} src="/img/acad.jpg" alt="" className='image' />
        </div>
        <div>
          <ul className='right'>
            <li>
              <img height={15} width={18} src='/img/tele.svg' alt=''/>
              <span>79037715101</span>
            </li>
            <li>
            <img height={15} width={18} src='/img/whatsapp.svg' alt=''/>
              <a href="https://wa.me/79037715101">Whatsapp</a>
            </li>
          </ul>
        </div>
      </header>
        <BrowserRouter>
       <div className='navigation'> 
        <Link to = '/'>О компании</Link>
        <Link to ='/house'>Загородные дома</Link>
        <Link to = '/interiors'>Интерьеры</Link>
      </div>
      <Routes>
        <Route path='/' element={<Company/>}></Route>
        <Route path="house" element = {<House/>}></Route>
        <Route path="interiors" element={<Interiors/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}


export default App;
