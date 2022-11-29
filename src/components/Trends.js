import React, { useState, useEffect } from 'react';
import CardMore from '../components/cardMore';

const Trends = () => {
    const [trends, setTrends] = useState([]);
    console.log(trends)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
    .then(response => response.json())
    .then((data) => {setTrends(data.results);
    });
    } ,[]);

    return ( 
        <>
         <h1 style={{textAlign: 'center', margin: "3rem", color: "white"}}>Trends</h1>
         {/* <div> */}
         <div class="row">
         <div className="all-cont">
         <div
         className="trends">
            {trends.map(item => 
            <div className="col-lg-3 p-0">
            <CardMore 
            image={item.poster_path} 
            title={item.original_title} 
            name={item.name} 
            date={item.release_date} 
            />
            </div>
            )}
            </div>
        </div>
        </div>
        {/* </div> */}
        </>
     );
}
 
export default Trends;






    
    

    

    