import MoviesList from "@/app/components/MoviesList";
import {getGenres, getMovies, getSearch} from "@/app/services/api.service";
import Pagination from "@/app/Pagination/pagination";
import Link from "next/link";

type Props = {
    searchParams: Promise<{
        pg?: string;
        q?: string;
        sortBy?: string;
        genreId?: string;
    }>;
};

const MoviesPage = async ({ searchParams }: Props) => {
    const params = await searchParams;

    const pg = params.pg || "1";
    const q = params.q || "";
    const sortBy = params.sortBy || 'popularity.desc';
    const genreId = params.genreId ? Number(params.genreId) : undefined;


    const page = Number(pg);

    const [movies, genres] = await Promise.all([
        q ? getSearch(q) : getMovies(page, sortBy, genreId),
        getGenres(),
    ]);

    return (
        <div>
            <p className='sort'>Sort By:</p>
            <div className='buttons'>
                <Link
                    href={`?sortBy=release_date.desc&genreId=${genreId}&q=${q}`}
                    className='date'>
                    date
                </Link>

                    <Link
                    href={`?sortBy=popularity.desc&genreId=${genreId}&q=${q}`}
                    className='popularity'>
                        popularity
                    </Link>

                    <Link
                    href={`?sortBy=vote_average.desc&genreId=${genreId}&q=${q}`}
                    className='rating'>
                        rating
                    </Link>
            </div>
            <p className='sort-genres'>Sort By Genres:</p>
            <div className='buttons-gen'>
                <Link href='?genreId=28' className='action'>Action</Link>
                <Link href='?genreId=16' className='animation'>Animation</Link>
                <Link href='?genreId=12' className='adventure'>Adventure</Link>
                <Link href='?genreId=35' className='comedy'>Comedy</Link>
                <Link href='?genreId=80' className='crime'>Crime</Link>
                <Link href='?genreId=18' className='drama'>Drama</Link>
                <Link href='?genreId=27' className='horror'>Horror</Link>
                <Link href='?genreId=99' className='documentary'>Documentary</Link>
                <Link href='?genreId=10751' className='family'>Family</Link>
                <Link href='?genreId=14' className='fantasy'>Fantasy</Link>
                <Link href='?genreId=36' className='history'>History</Link>
                <Link href='?genreId=10402' className='music'>Music</Link>
                <Link href='?genreId=9648' className='mystery'>Mystery</Link>
                <Link href='?genreId=10749' className='romance'>Romance</Link>
                <Link href='?genreId=53' className='thriller'>Thriller</Link>
                <Link href='?genreId=10752' className='war'>War</Link>
                <Link href='?genreId=37' className='western'>Western</Link>
            </div>
            <MoviesList movies={movies} genres={genres} />
            <Pagination pg={pg} />
        </div>
    );
};

export default MoviesPage;