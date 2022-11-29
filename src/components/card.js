import React from 'react';
import { Link} from 'react-router-dom';

const Card = (props) => {
    console.log(props);
    return ( 
      <div className="cards-container" style={{width: "18rem"}}>
        <div className="card cards shadow p-3 mb-5 bg-white rounded">
  <img src={'https://image.tmdb.org/t/p/w500'+props.image} className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <Link to={"/movies/" + props.id} style={{textDecoration: 'none', textAlign: 'center', color: 'darkGray'}}><h5 className="card-title">{props.title}</h5></Link>
    <div className="moviesLine">
    <p className="card-text pe">{props.date}</p>
    <Link to="/favorites"><button className="btn btn-outline-success">Add to Fav</button></Link>
  </div>
  </div>
</div>
</div>
      );
}
 
export default Card;

