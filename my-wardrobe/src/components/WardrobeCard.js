import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const WardrobeCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setdescriptionInput] = useState("");
  const [addInfo, setaddInfo] = useState("");
  return (
    <div className="Wardrobecard card m-2 w-25" style={{ border: "solid" }}>
      <img
        src={props.item.url}
        className="card-img-top h-50"
        alt={props.item.descrshort}
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

          <Button variant="primary" onClick={handleShow}>
            Edit
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit your item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  console.log("button in form clicked");
                }}
              >
                <label htmlFor="descrshort"> Title of item </label>
                <input
                  id="descrshort"
                  name="descrshort"
                  type="text"
                  placeholder="edit the title of the item!"
                  // prefilled value:
                  value={titleInput ? titleInput : props.item.descrshort}
                  // not prefiled, should display placeholder text before typing:
                  // value={titleInput}
                  onChange={(event) => {
                    console.log("in on change of title", event.target.value);
                    setTitleInput(event.target.value);
                  }}
                  onFocus={() => {
                    console.log("in focus");
                    setTitleInput("");
                  }}
                  onBlur={() => {
                    console.log("on Blur");
                  }}
                />
                <label htmlFor="descrlong"> Description of item </label>
                <input
                  id="descrlong"
                  name="descrlong"
                  type="text"
                  placeholder="edit the description of the item!"
                  // prefilled value:
                  value={
                    descriptionInput ? descriptionInput : props.item.descrlong
                  }
                  // not prefiled, should display placeholder text before typing:
                  // value={descriptionInput}
                  onChange={(event) => {
                    console.log("in on change of title", event.target.value);
                    setdescriptionInput(event.target.value);
                  }}
                  onFocus={() => {
                    console.log("in focus");
                    setdescriptionInput("");
                  }}
                  onBlur={() => {
                    console.log("on Blur");
                  }}
                />
                <label htmlFor="addinfo"> Additional information </label>
                <input
                  id="addinfo"
                  name="addinfo"
                  type="text"
                  placeholder="additional information to the item!"
                  // prefilled value:
                  value={addInfo ? addInfo : props.item.addinfo}
                  // not prefiled, should display placeholder text before typing:
                  // value={addInfo}
                  onChange={(event) => {
                    console.log("in on change of title", event.target.value);
                    setaddInfo(event.target.value);
                  }}
                  onFocus={() => {
                    console.log("in focus");
                    setaddInfo("");
                  }}
                  onBlur={() => {
                    console.log("on Blur");
                  }}
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Create a callback, and call the function, with id (string) */}
          {/* <button onClick={() => {props.addToOutfit(props.item.id)} } className="btn btn-primary" id={props.item.id}  >Add to outfit</button>  */}
        </div>
      </div>
    </div>
  );
};

export default WardrobeCard;
