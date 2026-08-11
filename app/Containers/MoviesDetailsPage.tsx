import React from 'react';
import {getMovie} from "@/app/services/api.service";
import {IMovie} from "@/app/models/IMovie";

type Props = {
    id: IMovie
}
const MoviesDetailsPage = async ({id}:Props) => {
   if (id) {
       const id = await getMovie(id)
       console.log(id)
   }
    return (
        <div className="MoviesDetailsPage">
            {
                movies.map(movie => (
                        <div key={movie.id}>
                            <p>id:{movie.id}</p>
                            <p>title:{movie.title}</p>
                            <p>overview:{movie.overview}</p>
                            <p>poster_path:{movie.poster_path}</p>
                            <p>backdrop_path:{movie.backdrop_path}</p>
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
                )
            }

        </div>
    );
};

export default MoviesDetailsPage;