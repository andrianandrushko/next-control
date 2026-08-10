import React from 'react';
import {getMovies} from "@/app/services/api.service";
import type {IMovie} from "@/app/models/IMovie";
const MoviesPage = async () => {
        const { results: movies } = await getMovies();
        return (
            <div>
                {movies.map((movie: IMovie) => (
                    <div key={movie.id}>
                        <p>{movie.id}</p>
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>
        );
    };
export default MoviesPage;