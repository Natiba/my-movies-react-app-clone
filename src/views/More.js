import React, { useState, useEffect } from 'react';
import CardMore from '../components/cardMore';

const More = () => {

    const [more, setMore] = useState([]);
    console.log(more)
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
    .then(response => response.json())
    .then((data) => {setMore(data.results);
    });
    } ,[]);

    return ( 
    <>
    <h1 style={{textAlign: 'center', margin: "2rem", color: "white"}}>Trending</h1>
    <div className="row">
        {more.map(item => 
        <div className="col-lg-3 col-auto">
        <CardMore
         image={item.poster_path} 
         title={item.original_title} 
         name={item.name} 
         type={item.media_type}/>
         </div>
         )}
        
        </div>
        
    </>
    
     );
}
 
export default More;