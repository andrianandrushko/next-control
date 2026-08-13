import {IMovie} from "@/src/models/IMovie";
import {IGenre} from "@/src/models/IGenre";
import PosterPreview from "@/src/components/PosterPreview";
import MovieInfo from "@/src/components/MovieInfo";
import StarsRating from "@/src/components/StarsRating";
import Link from "next/link";
import GenreBadge from "@/src/components/GenreBadge";
type Props = {
    movie:IMovie;
    genres:IGenre[];
}
const MoviesListCard = ({movie, genres}:Props) => {
    const movieGenres = genres.filter((genre) =>
        movie.genre_ids.includes(genre.id)
    )
    return (
        <div className="MoviesListCard">
            <PosterPreview poster_path={movie.poster_path}/>
            <MovieInfo movie={movie}/>
            <GenreBadge genres={movieGenres}/>
            <StarsRating rating={movie.vote_average}/>
            <Link href={`/movie/${movie.id}`}>
                <button className='details'>Details</button>
            </Link>
        </div>
    );
};

export default MoviesListCard;