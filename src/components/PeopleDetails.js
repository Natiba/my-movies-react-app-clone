import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'

const PeopleDetails = () => {
  // console.log(props);

const {id} = useParams();
const[peopleDetails, setPeopleDetails] = useState({});

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
.then((response) => response.json())
.then((data)=>setPeopleDetails(data));
}, []) //tuve que sacar el array vacio, me tiraba que no estaba en uso?

console.log(peopleDetails)


    return ( 

<>

<div className="card" style={{width: "20rem", margin: "4rem auto"}}>
  <img src={'https://image.tmdb.org/t/p/w500' + peopleDetails.profile_path} className="imgcard-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{peopleDetails.name}</h5>
    <p className="card-text">{peopleDetails.birthday}</p>
  </div>
  <ul className="list-group list-group-flush">
    {/* <li className="list-group-item">{peopleDetails.also_known_as}</li>  me lo tira en otro idioma */}
    <li className="list-group-item"><b>Biography:</b> {peopleDetails.biography}</li>
    <li className="list-group-item">{peopleDetails.homepage}</li>
  </ul>
  <div className="card-body">
    <Link to="/people" className="card-link">Go back People</Link>
    <Link to="/" className="card-link">Go back Home</Link>
  </div>
</div>
</>
 
     );
}
 
export default PeopleDetails;