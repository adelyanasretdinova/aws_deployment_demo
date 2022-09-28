import OutfitCard from "./OutfitCard"

const Outfit = (props) => {
  return (
    <div className="Outfit">
      { (props.outfitData.length > 0) ? ( 
        <h3>This is your styling for today:</h3>
       ) : ( 
          <h3> Select an outfit! </h3> )
      } 
      <div className="d-flex flex-wrap justify-content-center">
        {props.outfitData.map((element, index) => {
          return <OutfitCard key={index} item={element} removeFromOutfit={props.removeFromOutfit}/>
        })}
      </div>
    </div>
  )
}

export default Outfit