import { Link } from 'react-router-dom';
import { StyledHeader } from '../styles';


const Header = (props) => {
    return (

     <>
     <StyledHeader>

       <Link to="/"> <h1>Home</h1> </Link>
       <Link to="/about"> <h1>About</h1> </Link>
       <Link to="/contact"> <h1>Get in touch</h1> </Link>
       <Link to="/book"> <h1>Book a demo</h1> </Link>
       </StyledHeader>
       </>
 
    );
};

export default Header;