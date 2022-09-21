const WardrobeCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem", border: "solid" }}>
      <img src={props.item.url} className="card-img-top" alt={props.item.descrShort} />
      <div className="card-body">
        <h5 className="card-title">{props.item.descrShort}</h5>
        <p className="card-text"> {props.item.descrLong} </p>
        <button className="btn btn-primary" id='T-shirt'  >Add to outfit</button>
      </div>
    </div>
  )
}

export default WardrobeCard