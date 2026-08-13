import MoviesList from "@/src/components/MoviesList/MoviesList";
import { getGenres, getMovies, getSearch } from "@/src/services/api.service";
import Pagination from "@/src/pagination/pagination";
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
    const sortBy = params.sortBy || "popularity.desc";
    const genreId = params.genreId
        ? Number(params.genreId)
        : undefined;

    const page = Number(pg);

    const createUrl = (key: string, value: string) => {
        const newParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
            if (value) {
                newParams.set(key, value);
            }
        });

        newParams.set(key, value);

        return `?${newParams.toString()}`;
    };

    const [movies, genres] = await Promise.all([
        q
            ? getSearch(q)
            : getMovies(page, sortBy, genreId),
        getGenres(),
    ]);

    return (
        <div>
            <p className="sort">Sort By:</p>

            <div className="buttons">
                <Link
                    href={createUrl("sortBy", "release_date.desc")}
                    className="date"
                >
                    date
                </Link>

                <Link
                    href={createUrl("sortBy", "popularity.desc")}
                    className="popularity"
                >
                    popularity
                </Link>

                <Link
                    href={createUrl("sortBy", "vote_average.desc")}
                    className="rating"
                >
                    rating
                </Link>
            </div>

            <p className="sort-genres">Sort By Genres:</p>

            <div className="buttons-gen">
                <Link href={createUrl("genreId", "28")} className="action">
                    Action
                </Link>

                <Link href={createUrl("genreId", "16")} className="animation">
                    Animation
                </Link>

                <Link href={createUrl("genreId", "12")} className="adventure">
                    Adventure
                </Link>

                <Link href={createUrl("genreId", "35")} className="comedy">
                    Comedy
                </Link>

                <Link href={createUrl("genreId", "80")} className="crime">
                    Crime
                </Link>

                <Link href={createUrl("genreId", "18")} className="drama">
                    Drama
                </Link>

                <Link href={createUrl("genreId", "27")} className="horror">
                    Horror
                </Link>

                <Link href={createUrl("genreId", "99")} className="documentary">
                    Documentary
                </Link>

                <Link href={createUrl("genreId", "10751")} className="family">
                    Family
                </Link>

                <Link href={createUrl("genreId", "14")} className="fantasy">
                    Fantasy
                </Link>

                <Link href={createUrl("genreId", "36")} className="history">
                    History
                </Link>

                <Link href={createUrl("genreId", "10402")} className="music">
                    Music
                </Link>

                <Link href={createUrl("genreId", "9648")} className="mystery">
                    Mystery
                </Link>

                <Link href={createUrl("genreId", "10749")} className="romance">
                    Romance
                </Link>

                <Link href={createUrl("genreId", "53")} className="thriller">
                    Thriller
                </Link>

                <Link href={createUrl("genreId", "10752")} className="war">
                    War
                </Link>

                <Link href={createUrl("genreId", "37")} className="western">
                    Western
                </Link>
            </div>

            <MoviesList
                movies={movies}
                genres={genres}
            />

            <Pagination
                pg={pg}
                searchParams={params}
            />
        </div>
    );
};

export default MoviesPage;