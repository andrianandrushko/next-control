import {IMovie} from "@/src/app/models/IMovie";
import {IGenre} from "@/src/app/models/IGenre";
import MoviesListCard from "@/src/app/components/MoviesListCard";
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