import OutfitCard from "./OutfitCard"

const Outfit = (props) => {
  return (
    <div className="Outfit">
      <h5>This is your styling for today:</h5>
      <div className="d-flex">
        {props.outfitData.map((element, index) => {
          return <OutfitCard key={index} item={element} />
        })}
      </div>
    </div>
  )
}

export default Outfit