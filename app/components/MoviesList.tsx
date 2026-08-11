import React from 'react';
import {IMovie} from "@/app/models/IMovie";
import {IGenre} from "@/app/models/IGenre";
import MoviesListCard from "@/app/components/MoviesListCard";
type Props = {
    movies: IMovie[];
    genres: IGenre[];
}
const MoviesList = ({movies, genres}:Props) => {
    return (
        <div className="MoviesList">
            {
                 movies.map(movie => (
                    <MoviesListCard key={movie.id} movie={movie} genres={genres}  />
                ))
            }
            
        </div>
    );
};

export default MoviesList;