import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const WardrobeCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [titleInput, setTitleInput] = useState("");
  // const [descriptionInput, setdescriptionInput] = useState("");
  // const [season, setSeason] = useState("");
  // const [price, setPrice] = useState("");
  const EditingCard = Yup.object().shape({
    descrshort: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    price: Yup.number().min(1).max(100).required("Required"),
    descrlong: Yup.string()
      .min(10, "Too Short!")
      .max(500, "Too Long!")
      .required("Required"),
    season: Yup.string()
      .oneOf(["spring", "summer", "fall", "winter"])
      .required("Required"),
    url: Yup.string().required("Required"),
  });

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
            <Formik
              initialValues={{
                descrshort: props.item.descrshort,
                descrlong: props.item.descrlong,
                price: props.item.price,
                season: props.item.season,
              }}
              validationSchema={EditingCard}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
                let changedUrl = false;
                if (values.url !== props.item.url) {
                  changedUrl = true;
                }
                props.updateWardrobe(values, props.item.id, changedUrl);
                props.handleClose();
              }}
            >
              {({
                errors,
                touched,
                setFieldValue,
                handleSubmit,
                handleClose,
              }) => (
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <label htmlFor="descrshort"> Title of item </label>
                    <Field
                      id="descrshort"
                      name="descrshort"
                      type="text"
                      placeholder="edit the title of the item!"
                      // prefilled value:
                      // value={titleInput ? titleInput : props.item.descrshort}
                      // not prefiled, should display placeholder text before typing:
                      // value={titleInput}
                    />
                    <br></br>
                    {/* {errors.descrshort && touched.descrshort ? (
                      <div>{errors.descrshort}</div>
                    ) : null} */}
                    {errors.descrshort && touched.descrshort && (
                      <div className="text-danger">{errors.descrshort}</div>
                    )}
                    <label htmlFor="descrlong"> Description of item </label>
                    <Field
                      id="descrlong"
                      name="descrlong"
                      type="text"
                      placeholder="edit the description of the item!"
                      // prefilled value:
                      // not prefiled, should display placeholder text before typing:
                      // value={descriptionInput}
                    />
                    <br></br>
                    {errors.descrlong && touched.descrlong && (
                      <div>{errors.descrlong}</div>
                    )}

                    <label htmlFor="season"> Season </label>
                    <Field
                      id="season"
                      name="season"
                      type="text"
                      placeholder="season"
                      // prefilled value:
                      // value={season ? season : props.item.season}
                      // not prefiled, should display placeholder text before typing:
                      // value={descriptionInput}
                    />
                    {errors.season && touched.season && (
                      <div>{errors.descrlong}</div>
                    )}
                    <br></br>
                    <label htmlFor="price"> Price</label>
                    <Field
                      id="price"
                      name="price"
                      type="number"
                      placeholder="price"
                      // prefilled value:
                      // value={price ? price : props.item.price}
                      // not prefiled, should display placeholder text before typing:
                      // value={addInfo}
                    />
                    {errors.price && touched.price && <div>{errors.price}</div>}
                    {/* <div className="imageupload"> */}
                    <br></br>
                    <label htmlFor="url">Change image</label>
                    <input
                      id="url"
                      name="url"
                      type="file"
                      onChange={(event) => {
                        const fileToUpload = event.target.files;
                        setFieldValue("url", fileToUpload);
                      }}
                    />
                    {touched.url && errors.url ? (
                      <div className="text-danger">{`Url is ${errors.url}`}</div>
                    ) : null}
                    {/* </div> */}
                    <Modal.Footer>
                      <Button variant="secondary" onClick={props.handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              )}
            </Formik>
          </Modal>

          {/* Create a callback, and call the function, with id (string) */}
          {/* <button onClick={() => {props.addToOutfit(props.item.id)} } className="btn btn-primary" id={props.item.id}  >Add to outfit</button>  */}
        </div>
      </div>
    </div>
  );
};

export default WardrobeCard;
