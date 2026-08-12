import MoviesList from "@/app/components/MoviesList";
import {getGenres, getMovies, getSearch} from "@/app/services/api.service";
import Pagination from "@/app/Paginations/pagination";
import Link from "next/link";

type Props = {
    searchParams: Promise<{
        pg?: string;
        q?: string;
        sortBy?: string;
    }>;
};

const MoviesPage = async ({ searchParams }: Props) => {
    const params = await searchParams;

    const pg = params.pg || "1";
    const q = params.q || "";
    const sortBy = params.sortBy || 'popularity.desc';


    const page = Number(pg);

    const [movies, genres] = await Promise.all([
        q ? getSearch(q) : getMovies(page, sortBy),
        getGenres(),
    ]);

    return (
        <div>
            <p className='sort'>Sort By:</p>
            <div className='buttons'>
                    <Link
                        href='?sortBy=release_date.desc'
                        className='date'>
                        date
                    </Link>

                    <Link
                    href='?sortBy=popularity.desc'
                    className='popularity'>
                        popularity
                    </Link>

                    <Link
                    href={'?sortBy=vote_average.desc'}
                    className='rating'>
                        rating
                    </Link>
            </div>
            <p className='sort-genres'>Sort By Genres:</p>
            <div className='buttons-gen'>
                <button className='action'>Action</button>
                <button className='adventure'>Adventure</button>
                <button className='animation'>Animation</button>
                <button className='comedy'>Comedy</button>
                <button className='crime'>Crime</button>
                <button className='drama'>Drama</button>
                <button className='horror'>Horror</button>
                <button className='documentary'>Documentary</button>
                <button className='family'>Family</button>
                <button className='fantasy'>Fantasy</button>
                <button className='history'>History</button>
                <button className='music'>Music</button>
                <button className='mystery'>Mystery</button>
                <button className='romance'>Romance</button>
                <button className='thriller'>Thriller</button>
                <button className='war'>War</button>
                <button className='western'>Western</button>
                <button className='tv'>TV</button>
            </div>
            <MoviesList movies={movies} genres={genres} />
            <Pagination pg={pg} />
        </div>
    );
};

export default MoviesPage;