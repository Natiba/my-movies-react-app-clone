import React, { useState, useEffect } from 'react';
// import CaroHome from '../components/caroHome';
import CarouselCard from '../components/CarouselCard';
import Popular from '../components/Popular';
import Trends from '../components/Trends';
// import Carousel from 'react-bootstrap/Carousel'

const Home = () => {

    const [home, setHome] = useState([]);
    console.log(home)
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
    .then(response => response.json())
    .then((data) => {setHome(data.results);
    });
    } ,[]);


    return ( 
        <>
        {/* <div className="all-container"> */}
        {/* <CaroHome home = {home} /> */}
        <div>
        <CarouselCard home = {home} />
        </div>
        <div>
        <Popular /> 
        </div>
        <div>
        <Trends />
        </div>

        {/* </div> */}
        </>
     );
}
 
export default Home; 