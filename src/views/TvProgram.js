import React, { useState, useEffect } from 'react';
import CardTv from '../components/cardTv';

const TvProgram = () => {

    const [tv, setTv] = useState([]);
    console.log(tv)
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
    .then(response => response.json())
    .then((data) => {setTv(data.results);
    });
    } ,[]);

    return ( 
    <>
    <h1 style={{textAlign: 'center', margin: "2rem", color: "white"}}>Series</h1>
    <div className="all-container">
        <ul>{tv.map(item => 
        <CardTv key = {item.id}
        image={item.poster_path} 
        title={item.name} 
        country={item.origin_country}
        id={item.id}
        />)}
        </ul>
        </div>
    </>
     );
}
 
export default TvProgram;

