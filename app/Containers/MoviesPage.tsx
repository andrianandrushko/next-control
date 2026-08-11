import MoviesList from "@/app/components/MoviesList";
import {getGenres, getMovies} from "@/app/services/api.service";

const MoviesPage = async () => {
    const [movies, genres] = await Promise.all([getMovies(), getGenres()]);

    return (
        <div>
            <MoviesList movies={movies} genres={genres} />
        </div>
    );
};

export default MoviesPage;