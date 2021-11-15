
import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Press from './pages/Press';
import Developer from './pages/Developer';
import Blog from './pages/Blog';
import Entrepreneur from './pages/Entreprenuer';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Reviews from './pages/Reviews';
import Main from './pages/Main';

import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

const REVIEW_URL = 'http://localhost:3001/reviews';

function App() {
 

  return (
    <div>
     <Nav />
     <Header />
    
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/press' element={<Press />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/developer' element={<Developer />}/>
       <Route path='/entrepreneur' element={<Entrepreneur/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/hobbies' element={<Hobbies/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/book' element={<Book/>}/>
       <Route path='/reviews' element={<Reviews/>}/>
       <Route path='/main' element={<Main/>}/>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;