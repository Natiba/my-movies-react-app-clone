import React from 'react';
import { Link} from 'react-router-dom';

const CardTv = (props) => {
    console.log(props)
    return ( 
        <div className="cards-container" style={{width: "18rem"}}>
        <div className="card cards shadow p-3 mb-5 bg-white rounded">
  <img src={'https://image.tmdb.org/t/p/w500'+props.image} className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    {/* es igual a decir:  series:id */}
  <Link to={"/series/" + props.id} style={{textDecoration: 'none', textAlign: 'center', color: 'darkGray', margin: '1rem'}}><h5 className="card-title">{props.title}</h5></Link>
  <div className="moviesLine">
    <p className="card-text color pe">{props.country}</p>
    <Link to="/favorites"><button className="btn btn-outline-success">Add to Fav</button></Link>
    </div>
  </div>
</div>
</div>
     );
}
 
export default CardTv;