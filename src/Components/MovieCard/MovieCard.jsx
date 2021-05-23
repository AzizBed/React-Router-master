import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieCard.css";

function MovieCard({ newMovie }) {
    return (
        <div >
            <Card
                className="movieCard"
                style={{
                    width: "18rem",
                    borderRadius: "10px",
                    border: "2px solid red",
                    background:"red"
                }}
            >
                <Card.Img
                    variant="top"
                    src={newMovie.PosterUrl}
                    alt="Movie poster"
                    width="150px"
                />
                <Card.Body>
                    <Card.Title>{newMovie.Title}</Card.Title>
                    <Card.Text>{newMovie.Description}</Card.Text>
                </Card.Body>
               
                        {newMovie.Rating ===5 ? (
                            <span style={{ color: "yellow" }}>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                        ) : newMovie.Rating === 4 ? (
                            <span style={{ color: "yellow" }}>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                        ) : newMovie.Rating === 3 ? (
                            <span style={{ color: "yellow" }}>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                        ) : newMovie.Rating === 2 ? (
                            <span style={{ color: "yellow" }}>
                                <FaStar />
                                <FaStar />
                            </span>
                        ) : newMovie.Rating === 1 ? (
                            <span style={{ color: "yellow" }}>
                                <FaStar />
                            </span>
                        ) : (
                            newMovie.Rating + " stars "
                        )}{" "}
                   
                <Card.Body>
                    <Button variant="primary">Download</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;
