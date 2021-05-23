import React, { useState } from "react";
import { FormControl, Modal, Button, Form } from "react-bootstrap";
import "./AddMovie.css";

function AddMovie({newMovie,  setNewMovie, newMovieData, setNewMovieData }) {
    const [show, setShow] = useState(false);

    const handleSave = () => {
        if (
            newMovieData.Title !== "" &&
            newMovieData.Description !== "" &&
            newMovieData.PosterUrl !== "" &&
            newMovieData.Rating <= 5
        ) {
            setNewMovie([...newMovie, newMovieData]);
            
            setShow(false);
        } else {
            alert("All fields are mandatory");
        }
        setNewMovieData({
            Title: "",
            Description: "",
            PosterUrl: "",
            Rate: 0,
        })
    };
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                <img
                    style={{ cursor: "pointer"}}
                    src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/512/add-icon.png"
                    width="250px"
                    height="300px"
                    alt="Add movie"
                /> <p>Add a new movie</p>
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormControl
                            type="text"
                            placeholder="Enter movie title..."
                            className="Input"
                            onChange={(e) => {
                               setNewMovieData ({Title : e.target.value}) ;
                            }}
                            value={newMovieData.Title}
                        />
                        <FormControl
                            type="text"
                            placeholder="Enter movie description..."
                            className="Input"
                            onChange={(e) => {
                                newMovieData.Description = e.target.value;
                            }}
                        />
                        <FormControl
                            type="text"
                            placeholder="Enter movie poster url..."
                            className="Input"
                            onChange={(e) => {
                                newMovieData.PosterUrl = e.target.value;
                            }}
                        />
                        <FormControl
                            type="number"
                            max="5"
                            min="1"
                            placeholder="Enter movie rating..."
                            className="Input"
                            onChange={(e) => {
                                newMovieData.Rating = parseInt(e.target.value);
                            }}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMovie;
