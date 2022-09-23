import OutfitCard from "./OutfitCard"

const Outfit = (props) => {
  let text;

  if(props.outfitData.length > 0) {
    text = "This is your styling for today:"
  } else {
    text =  "Select an outfit!"
  }

  return (
    <div className="Outfit">

      {/* Option 3: */}

      <h3>{props.header}</h3>

      {/* Option 2 */}
      <h3>{text}</h3>
      {/* Option 1: Check length, display different header */}
      { (props.outfitData.length > 0) ? ( 
        <h3>This is your styling for today:</h3>
       ) : ( 
          <h3> Select an outfit! </h3> )
      } 
      <div className="d-flex">
        {props.outfitData.map((element, index) => {
          return <OutfitCard key={index} item={element} removeFromOutfit={props.removeFromOutfit}/>
        })}
      </div>
    </div>
  )
}

export default Outfit