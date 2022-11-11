import WardrobeCard from "./WardrobeCard";

const Wardrobe = (props) => {
  return (
    <div className="Wardrobe d-flex flex-wrap justify-content-center">
      {props.wardrobeData.map((element, index) => {
        return (
          <WardrobeCard
            key={index}
            item={element}
            addToOutfit={props.addToOutfit}
            deleteItem={props.deleteItem}
            updateWardrobe={props.updateWardrobe}
          />
        );
      })}
    </div>
  );
};

export default Wardrobe;
