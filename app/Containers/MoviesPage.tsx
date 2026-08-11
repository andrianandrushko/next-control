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
            <MoviesList movies={movies} genres={genres} />
            <Pagination pg={pg} />
        </div>
    );
};

export default MoviesPage;