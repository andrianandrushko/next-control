import MoviesList from "@/app/components/MoviesList";
import {getGenres, getMovies, getSearch} from "@/app/services/api.service";
import Pagination from "@/app/Paginations/pagination";

type Props = {
    searchParams: Promise<{
        pg?: string;
        q?: string;
    }>;
};

const MoviesPage = async ({ searchParams }: Props) => {
    const params = await searchParams;

    const pg = params.pg || "1";
    const q = params.q || "";

    console.log(params.q);

    const page = Number(pg);

    const [movies, genres] = await Promise.all([
        q ? getSearch(q) : getMovies(page),
        getGenres(),
    ]);

    return (
        <div>
            <p className='sort'>Sort By:</p>
            <div className='buttons'>
                <button className='date'>Date</button>
                <button className='popularity'>popularity</button>
                <button className='rating'>rating</button>
            </div>
            <MoviesList movies={movies} genres={genres} />
            <Pagination pg={pg} />
        </div>
    );
};

export default MoviesPage;