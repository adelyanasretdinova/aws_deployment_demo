import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Formik, Form, Field } from "formik";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const NewItem = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [error, setError] = useState(null);
  const [messageUpload, setMessageUpload] = useState(false);

  const EditingCard = Yup.object().shape({
    descrshort: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    price: Yup.number().min(1).max(100).required("Required"),
    descrlong: Yup.string()
      .min(5, "Too Short!")
      .max(500, "Too Long!")
      .required("Required"),
    season: Yup.string()
      .oneOf(["Spring", "Summer", "Autumn", "Winter"])
      .required("Required"),
    url: Yup.string().required("Required"),
    currency: Yup.string().oneOf(["EUR", "USD", "GBP"]).required("Required"),
    material: Yup.string()
      .oneOf(["Cotton", "Nylon", "Jersey", "Polyester", "Cord", "Wool"])
      .required("Required"),
    size: Yup.string()
      .min(1, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
    color: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const uploadImageToCloudinary = async (item) => {
    console.log("upload image start");
    // setup
    let preset = `${process.env.REACT_APP_CLOUDINARY_PRESET}`;
    let cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}`;
    let cloudPath = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    // create body to post:
    let dataForBody = new FormData();
    dataForBody.append("file", item.url[0]);
    dataForBody.append("upload_preset", preset);
    dataForBody.append("cloud_name", cloudName);

    // fetch Post image to cloudinary
    try {
      let responseFromCloud = await fetch(cloudPath, {
        method: "POST",
        body: dataForBody,
      });
      let imageData = await responseFromCloud.json();
      console.log("post to cloud", imageData);
      return imageData;
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const addNewItem = async (addedItem) => {
    // upload image to cloudinary
    let resultFromImageUpload = await uploadImageToCloudinary(addedItem);
    let imageUrl = resultFromImageUpload.url;

    let updatedItemList = { ...addedItem, url: imageUrl };

    // get access to token in local storage:
    let tokenFromLS = localStorage.getItem("token");
    let JWT_TOKEN = JSON.parse(tokenFromLS);
    let path = `${process.env.REACT_APP_WARDROBE_API}/wardrobe`;
    try {
      let response = await fetch(path, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
        body: JSON.stringify(updatedItemList),
      });
      console.log("response from fetch", response);
      if (response.status === 201) {
        setMessageUpload(response.statusText);
      } else {
        let error = new Error(`${response.statusText}: ${response.url}`);
        error.status = response.status;
        throw error;
      }
    } catch (error) {
      console.log("There was an error when updating data", error);
      setError(error.message);
    }
  };

  return (
    <div className="newItem d-flex flex-column align-self-center">
      <Button variant="primary" onClick={handleShow}>
        Add new Item to your wardrobe
      </Button>
      {error ? <h2>{error}</h2> : null}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Let's add a new item to your wardrobe</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{
            descrshort: "",
            descrlong: "",
            price: "",
            season: "",
            currency: "",
            color: "",
            size: "",
            material: "",
          }}
          validationSchema={EditingCard}
          onSubmit={(values) => {
            console.log(values);
            addNewItem(values);
            handleClose();
          }}
        >
          {({ errors, touched, setFieldValue, handleSubmit }) => (
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <label htmlFor="descrshort"> Title of item </label>
                <Field
                  id="descrshort"
                  name="descrshort"
                  type="text"
                  className="form-control"
                  placeholder="add the title of the item"
                />
                <br></br>
                {errors.descrshort && touched.descrshort && (
                  <div className="text-danger">{errors.descrshort}</div>
                )}
                <label htmlFor="descrlong"> Description of item </label>
                <Field
                  id="descrlong"
                  name="descrlong"
                  type="text"
                  className="form-control"
                  placeholder="add the description of the item!"
                  // prefilled value:
                  // not prefiled, should display placeholder text before typing:
                  // value={descriptionInput}
                />
                <br></br>
                {errors.descrlong && touched.descrlong && (
                  <div className="text-danger">{errors.descrlong}</div>
                )}
                <label htmlFor="season"> Season </label>
                <Field
                  as="select"
                  className="form-control"
                  id="season"
                  name="season"
                  placeholder="season"
                  // value="-- select an option --"
                >
                  <option disabled="disabled">-- select an option --</option>
                  <option>Winter</option>
                  <option>Autumn</option>
                  <option>Summer</option>
                  <option>Spring</option>
                </Field>
                {errors.season && touched.season && (
                  <div className="text-danger">{errors.season}</div>
                )}
                <br></br>
                <label htmlFor="price"> Price</label>
                <Field
                  id="price"
                  name="price"
                  type="number"
                  className="form-control"
                  placeholder="price"
                  // prefilled value:
                  // value={price ? price : props.item.price}
                  // not prefiled, should display placeholder text before typing:
                  // value={addInfo}
                />
                {errors.price && touched.price && (
                  <div className="text-danger">{errors.price}</div>
                )}
                <br></br>
                <label htmlFor="currency"> Currency </label>
                <Field
                  as="select"
                  className="form-control"
                  id="currency"
                  name="currency"
                  placeholder="currency"
                >
                  <option disabled="disabled">-- select an option --</option>
                  <option>EUR</option>
                  <option>USD</option>
                  <option>GBP</option>
                </Field>
                {errors.currency && touched.currency && (
                  <div className="text-danger">{errors.currency}</div>
                )}
                <br></br>
                {/* <div className="imageupload"> */}
                <label htmlFor="color"> Color </label>
                <Field
                  id="color"
                  name="color"
                  type="text"
                  className="form-control"
                  placeholder="add the color"
                  // prefilled value:
                  // not prefiled, should display placeholder text before typing:
                  // value={descriptionInput}
                />
                {errors.color && touched.color && (
                  <div className="text-danger">{errors.color}</div>
                )}
                <br></br>
                <label htmlFor="size"> Size </label>
                <Field
                  id="size"
                  name="size"
                  type="text"
                  className="form-control"
                  placeholder="add size"
                  // prefilled value:
                  // not prefiled, should display placeholder text before typing:
                  // value={descriptionInput}
                />
                {errors.size && touched.size && (
                  <div className="text-danger">{errors.size}</div>
                )}
                <br></br>
                <label htmlFor="material"> Material </label>
                <Field
                  as="select"
                  className="form-control"
                  id="material"
                  name="material"
                  placeholder="specify material here"
                >
                  <option disabled="disabled">-- select an option --</option>
                  <option>Cotton</option>
                  <option>Nylon</option>
                  <option>Jersey</option>
                  <option>Polyester</option>
                  <option>Cord</option>
                  <option>Wool</option>
                </Field>
                {errors.material && touched.material && (
                  <div className="text-danger">{errors.material}</div>
                )}
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
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Add to wardrobe
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          )}
        </Formik>
      </Modal>
      {messageUpload ? (
        <>
          <h2>{messageUpload} </h2>
          <Link to="/"> Go back to main page</Link>
        </>
      ) : null}
    </div>
  );
};

export default NewItem;
