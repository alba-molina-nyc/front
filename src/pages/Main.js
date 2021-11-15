import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';import Nav from './components/Nav';
import Footer from './components/Footer';import { StyledFooter, StyledHeader, StyledMain } from '../styles';


// this script plays a greeting upon the current time!
const today = new Date();
const hourNow = today.getHours();
let greeting='';
if (hourNow >18) {
    greeting = 'Good evening!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}



const Main = (props) => {
    return (
     <>
     <StyledMain>
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
         </StyledMain>
       </>
    );
};

export default Main;