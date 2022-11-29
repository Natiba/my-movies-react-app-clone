import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-dark bg-darkt">
          
  <div className="container-fluid" style={{padding: "1.2rem"}}>
    <Link to= "/"  className="navbar-brand  mx-5" href="1">CINEMA-CAT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item col align-self-center">
          <Link to= "/movies" className="nav-link active" aria-current="page" href="2">Movies</Link>
        </li>
        <li className="nav-item col align-self-center">
          <Link to="/series" className="nav-link active" href="#">Series</Link>
        </li>
        <li className="nav-item col align-self-center">
          <Link to="/people" className="nav-link active" href="#">People</Link>
        </li>
        <li className="nav-item col align-self-center">
          <Link to="/more" className="nav-link active" href="#">More</Link>
        </li>
        
      </ul>

      <div>
          <Link to="/search" className="btn btn-outline-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></Link>
        
          <Link to= "/favorites" className="btn">❤️</Link>
      </div>
     
    </div>
  </div>

</nav>
     );
}
 
export default NavBar;