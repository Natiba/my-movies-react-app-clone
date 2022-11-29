const CardMore = (props) => {
    console.log(props)
    return ( 
        <div className="cards-container" style={{width: "18rem"}}>
        <div className="card cards shadow p-3 mb-5 bg-white rounded">
  <img src={'https://image.tmdb.org/t/p/w500'+props.image} className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title tetx" >{props.title}</h5>
    <h5 className="card-title tetx" >{props.name}</h5>
    <p className="card-text color tetx" >{props.type}</p>
  </div>
</div>
</div>

     );
}
 
export default CardMore;