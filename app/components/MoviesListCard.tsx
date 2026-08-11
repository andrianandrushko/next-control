import React from 'react';
import {IMovie} from "@/app/models/IMovie";
import {IGenre} from "@/app/models/IGenre";
import PosterPreview from "@/app/components/PosterPreview";
import MovieInfo from "@/app/components/MovieInfo";
import StarsRating from "@/app/components/StarsRating";
import Link from "next/link";
import GenreBadge from "@/app/components/GenreBadge";
type Props = {
    movie:IMovie;
    genres:IGenre[];
}
const MoviesListCard = ({movie, genres}:Props) => {
    return (
        <div className="MoviesListCard">
            <PosterPreview poster_path={movie.poster_path}/>
            <MovieInfo movie={movie}/>
            <GenreBadge genres={genres}/>
            <StarsRating rating={movie.vote_average}/>
            <Link href={`/movie/${movie.id}`}>
                <button className='details'>Details</button>
            </Link>
        </div>
    );
};

export default MoviesListCard;