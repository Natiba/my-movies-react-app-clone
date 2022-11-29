import React from 'react';

const CarouselCard = (props) => {
    const{home} = props;
    console.log(props)

    return ( 

<>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div className="carousel-inner">

    {home.map((item, index) => 
    index === 0 ?

    <div className="carousel-item active">
      <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="d-block w-100" alt="..."  style={{textAlign: 'center', margin: "1rem auto", color: "white", alignItems: 'center', boxShadow: '4px 4px 8px aqua'}}/>
      <div className="carousel-caption d-none d-md-block">
      <h1 style={{fontSize: '10rem', textShadow: '4px 4px 8px black'
}}>WELCOME</h1>
        <p style={{fontSize: '2rem', textShadow: '1px 1px 2px red'
}}>Millions of movies and series to discover...</p>
      </div>
    </div>
    :
    <div className="carousel-item">
    <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path}  className="d-block w-100" alt="..." />
    {/* <div className="carousel-caption d-none d-md-block"> */}
      {/* <h1 style={{fontSize: "10rem"}}>WELCOME</h1> */}
      {/* <p>Millions of movies and series to discover...</p> */}
    {/* </div> */}
  </div>
      )}
    
    {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


{home.map((item => 
    <div className="carousel-item">
    <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path}  className="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
      <h1 style={{fontSize: "10rem"}}>WELCOME</h1>
      <p>Millions of movies and series to discover...</p>
    </div>
  </div>
      ))}

</>



     );
}
 
export default CarouselCard;

// {'https://image.tmdb.org/t/p/w500' + home.backdrop_path}