import { StyledNav } from "../styles";
import { Link } from 'react-router-dom';


const Nav = (props) => {



    return (
     <>
     <StyledNav>
       <ul> 
    <li><Link to="/developer"><h3>Developer Projects</h3></Link></li>
     <li> <Link to="/entreprenuer"><h3>Entreprenuer </h3></Link></li>
     <li><Link to="/hobbies"><h3>Hobbies </h3></Link></li>
     <li><Link to="/press"><h3>Press </h3></Link></li>
     <li><Link to="/reviews"><h3>Reviews</h3></Link></li>
     <li><Link to="/book"> <h3>Book a time on my calendar </h3> </Link></li>
     <li><Link to="/blog"> <h3>Blog</h3></Link></li>

     </ul>
 

    
    

       </StyledNav>
       </>
    );
};

export default Nav;
