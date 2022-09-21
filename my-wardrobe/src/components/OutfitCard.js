const OutfitCard = (props) => {
  return (
    <>
    <div className="Outfitcard card" style={{ width: "18rem", border: "solid" }}>
      <div className="card-body">
        <h5 className="card-title">{props.item.descrShort}</h5>      
      </div>
    </div>
    </>
  )
}

export default OutfitCard