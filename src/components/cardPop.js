// import {Link} from 'react-router-dom'

const  cardPop= (props) => {
    // const{home} = props;
    console.log(props)
    return ( 
        <>
        <div className="cards-container" style={{width: "14rem", borderRadius: "50px"}}>
        <div className="card cards shadow p-3 mb-5 bg-white rounded">
  <img src={'https://image.tmdb.org/t/p/w200'+props.image} className="card-img-top rounded" alt="..."/>
  
{/* </div>

<div className="card cards2 shadow p-3 mb-5 bg-white rounded"> */}
  
  <div className="card-body">
      <h4 className="card-text">{props.title}</h4>
    {/* <Link to={"/movies/" + props.id}><h5 className="card-title">{props.title}</h5></Link> */}
    <p className="card-text">{props.date}</p>
  </div>
</div>

</div>
        </>
     );
}
 
export default cardPop;