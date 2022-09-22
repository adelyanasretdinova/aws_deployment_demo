const WardrobeCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem", border: "solid" }}>
      <img src={props.item.url} className="card-img-top" alt={props.item.descrShort} />
      <div className="card-body">
        <h5 className="card-title">{props.item.descrShort}</h5>
        <p className="card-text"> {props.item.descrLong} </p>
        {/* Refer to the function in the onClick, works with event */}
        {/* <button onClick={props.addToOutfit} className="btn btn-primary" id={props.item.id}  >Add to outfit</button> */}
        {/* Create a callback, and call the function, with event (object)  */}
        <button onClick={(event) => {   
          console.log('button works')
          props.addToOutfit(event)
        }} className="btn btn-primary" id={props.item.id}  >Add to outfit</button> 
        {/* Create a callback, and call the function, with id (string) */}
        {/* <button onClick={() => {props.addToOutfit(props.item.id)} } className="btn btn-primary" id={props.item.id}  >Add to outfit</button>  */}

      </div>
    </div>
  )
}

export default WardrobeCard