import "./header.css"
import Privacy from "./Privacy";
import Terms from "./Terms";
import { Link } from "react-router-dom";
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"; 
function Header() {
  return (  <div>

<nav class="one">
  <ul>
    <h1><img  src={require('./image4.webp')} alt="" style={{height:"50px",with:"50px"}}/>Fifa</h1>
    <li><a href="#">World ranking</a></li>
    <li><a href="#">AboutFifa</a></li>
    <li><a href="#">Tournament On Fifa</a></li>
    <li><a href="#" >Feedback</a></li>
    <li><a href="#">Legal 
 </a>
      <ul>
        <li><Link to="/Privacy">Privacy</Link></li>
        <li><Link to="/Terms">Terms</Link></li>
      </ul>
    </li>
  </ul>
    
    
    
    
  
</nav>


      <Routes>
        
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Terms" element={<Terms/>}/>


      </Routes>




    </div>);
}

export default Header;