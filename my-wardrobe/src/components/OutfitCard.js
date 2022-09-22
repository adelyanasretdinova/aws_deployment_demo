const OutfitCard = (props) => {
  return (
    <div className="Outfitcard card" style={{ width: "18rem", border: "solid" }}>
      <img src={props.item.url} className="card-img-top" alt={props.item.descrShort} />
      <div className="card-body">
        <h5 className="card-title">{props.item.descrShort}</h5>
        <button className="btn btn-primary" id={props.item.id} onClick={(e) => props.removeFromOutfit(e)} >Remove</button>
      </div>
    </div>
  )
}

export default OutfitCard