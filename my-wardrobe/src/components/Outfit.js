import OutfitCard from "./OutfitCard"

const Outfit = (props) => {
  return (
    <div className="Outfit d-flex">
    {props.outfitData.map((element, index) => {
      return <OutfitCard key={index} item={element} />
    })}
  </div>
  )
}

export default Outfit