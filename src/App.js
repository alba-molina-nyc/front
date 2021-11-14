
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

import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
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
     </Routes>
     <Footer />
    </div>
  );
}

export default App;