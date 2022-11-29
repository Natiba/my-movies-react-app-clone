import React, { useState, useEffect } from 'react';
import CardPop from '../components/cardPop';

const Popular = () => {
    const [pop, setPop] = useState([]);
    console.log(pop)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
    .then(response => response.json())
    .then((data) => {setPop(data.results);
    });
    } ,[]);

    return ( 
        <>
         <h1 style={{textAlign: 'center', margin: "3rem", color: "white"}}>Most Popular</h1>
         <div class="row">
         <div className="all-cont">
         <ul className="trends">
            {pop.map(item => 
            <div className="col-lg-3 p-0">
            <CardPop 
            image={item.poster_path} 
            title={item.original_title}  
            date={item.release_date} 
            type={item.media_type}/>
             </div>
            )}
            </ul>
        </div>
       </div>
        {/* </div> */}
        </>
     );
}
 
export default Popular;




    

    

 


