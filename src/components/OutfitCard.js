const OutfitCard = (props) => {
  return (
    <div className="Outfitcard card m-2 w-25" style={{ border: "solid" }}>
      <img
        src={props.item.url}
        className="card-img-top h-50"
        alt={props.item.descrshort}
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.descrshort}</h5>
        <button
          className="btn btn-primary"
          id={props.item.id}
          onClick={(e) => props.removeFromOutfit(e)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default OutfitCard;
