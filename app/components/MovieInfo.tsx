import React from 'react';
import {IMovie} from "@/app/models/IMovie";
import Image from "next/image";
type Props = {
    movie:IMovie;
}
const MovieInfo = async ({movie}:Props) => {
    return (
        <div className="MovieInfo">
                <div key={movie.id}>
                    <p>{movie.title}</p>
                    <p className={'overview'}><Image src='/description.png' alt="description" className={'description'}/> : {movie.overview}</p>
                </div>
        </div>
    );
};

export default MovieInfo;