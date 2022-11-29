import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'

const SerieDetails = () => {
  // console.log(props);

const {id} = useParams();
const[serieDetails, setSerieDetails] = useState({});

useEffect(() => {
    fetch(`
    
https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
.then((response) => response.json())
.then((data)=>setSerieDetails(data));
}, []) //tuve que sacar el array vacio, me tiraba que no estaba en uso?

console.log(serieDetails)


    return ( 

<>

<div className="card" style={{width: "20rem", margin: "4rem auto"}}>
  <img src={'https://image.tmdb.org/t/p/w500' + serieDetails.backdrop_path} className="imgcard-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{serieDetails.name}</h5>
    <p className="card-text">{serieDetails.overview}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{serieDetails.homepage}</li>
    <li className="list-group-item">Original language: <b>{serieDetails.original_language}</b></li>
    <li className="list-group-item">Id: <b>{serieDetails.id}</b></li>
  </ul>
  <div className="card-body">
    <Link to="/series" className="card-link">Go back Series</Link>
    <Link to="/" className="card-link">Go back Home</Link>
  </div>
</div>
</>
 
     );
}
 
export default SerieDetails;