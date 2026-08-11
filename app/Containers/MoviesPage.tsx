import MoviesList from "@/app/components/MoviesList";
import { getGenres, getMovies } from "@/app/services/api.service";
import Pagination from "@/app/Paginations/pagination";

type Props = {
    searchParams: Promise<{
        pg?: string;
    }>;
};

const MoviesPage = async ({ searchParams }: Props) => {
    const { pg = "1" } = await searchParams;

    const page = Number(pg);

    const [movies, genres] = await Promise.all([
        getMovies(page),
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