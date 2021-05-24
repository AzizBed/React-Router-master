import React,{useState} from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

import AddMovie from "../AddMovie/AddMovie";

function MovieList({
    titleSearch,
    rateSearch,
    MovieData,
    
}) {
    const [newMovie, setNewMovie] = useState(MovieData);
    const[newMovieData,setNewMovieData] =useState({
        Title: "",
        Description: "",
        PosterUrl: "",
        Rating: 0,
    })
    
    return (
        <div className="movielist">
            {newMovie.filter(
                (el) =>
                    el.Title.toLowerCase().includes(
                        titleSearch.toLowerCase()
                    ) && el.Rating >= rateSearch
            ).map((val, i) => (
                <div key={i}>
                    <MovieCard newMovie={val} />{" "}
                </div>
            ))}

            <AddMovie
                newMovie={newMovie}
                newMovieData={newMovieData}
                setNewMovie={setNewMovie}
                setNewMovieData={setNewMovieData}
            />
        </div>
    );
}

export default MovieList;
