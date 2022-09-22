import WardrobeCard from "./WardrobeCard"

const Wardrobe = (props) => {
  return (
    <div className="Wardrobe d-flex">
      {props.wardrobeData.map((element, index) => {
        return <WardrobeCard key={index} item={element} addToOutfit={props.addToOutfit} />
      })}
    </div>
  )
}

export default Wardrobe