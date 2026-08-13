import {getMovie} from "@/src/services/api.service";
import GenreBadge from "@/src/components/GenreBadge/GenreBadge";
import StarsRating from "@/src/components/StarsRating/StarsRating";
import MovieInfo from "@/src/components/MovieInfo/MovieInfo";
import PosterPreview from "@/src/components/PosterPreview/PosterPreview";



type Props = {
    id: string
}
const MoviesDetailsPage = async ({id}:Props) => {
    const movie = await getMovie(id)
    return (
            <div className="MoviesDetailsPage">
                <PosterPreview poster_path={movie.poster_path} />
                <MovieInfo movie={movie} />
                <StarsRating rating={movie.vote_average} />
                <GenreBadge genres={movie.genres} />
                <p>release_date:{movie.release_date}</p>
                <p>vote_average:{movie.vote_average}</p>
                <p>vote_count:{movie.vote_count}</p>
                <p>popularity:{movie.popularity}</p>
                <p>genre_ids:{movie.genre_ids}</p>
                <p>original_language:{movie.original_language}</p>
                <p>original_title:{movie.original_title}</p>
                <p>adult:{movie.adult ? 'Yes' : 'No'}</p>
                <p>video:{movie.video ? 'Yes' : 'No'}</p>
                </div>
        )
}

export default MoviesDetailsPage;