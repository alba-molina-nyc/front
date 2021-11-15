import { StyledBody } from '../styles';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
     <StyledBody>
            <Link to="/main"><h3>enter</h3></Link>
   <img src='https://i.imgur.com/PlLzHCj.png' width='65%'></img>
       </StyledBody>
    
    );
};

export default Home;