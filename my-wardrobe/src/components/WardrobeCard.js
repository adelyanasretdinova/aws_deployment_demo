const WardrobeCard = (props) => {
  return (
    <div className="Wardrobecard card m-2 w-25" style={{ border: "solid" }}>
      <img
        src={props.item.url}
        className="card-img-top h-50"
        alt={props.item.descrShort}
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.descrshort}</h5>
        <p className="card-text"> {props.item.descrlong} </p>
        {/* Refer to the function in the onClick, works with event */}
        {/* <button onClick={props.addToOutfit} className="btn btn-primary" id={props.item.id}  >Add to outfit</button> */}
        {/* Create a callback, and call the function, with event (object)  */}
        <div className="buttons d-flex gap-2">
          <button
            onClick={(event) => {
              console.log("button works");
              props.addToOutfit(event);
            }}
            className="btn btn-primary"
            id={props.item.id}
          >
            Add to outfit
          </button>
          <button
            onClick={(event) => {
              console.log("button works");
              props.deleteItem(event);
            }}
            className="btn btn-danger"
            id={props.item.id}
          >
            Delete
          </button>
          {/* Create a callback, and call the function, with id (string) */}
          {/* <button onClick={() => {props.addToOutfit(props.item.id)} } className="btn btn-primary" id={props.item.id}  >Add to outfit</button>  */}
        </div>
      </div>
    </div>
  );
};

export default WardrobeCard;
