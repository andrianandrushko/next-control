import "server-only";
import {IMovie} from "@/app/models/IMovie";
import {IGenre} from "@/app/models/IGenre";

const MYTOKEN = process.env.TMDB_API_TOKEN;

export async function getMovies(page: number = 1): Promise<IMovie[]> {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, {
        headers: { Authorization: `Bearer ${MYTOKEN}` },
        next: { revalidate: 3600 },
    });

    const data = await res.json();
    return data.results;
}

export async function getGenres(): Promise<IGenre[]> {
    const res = await fetch("https://api.themoviedb.org/3/genre/movie/list", {
        headers: { Authorization: `Bearer ${MYTOKEN}` },
        next: { revalidate: 3600 },
    });

    const data = await res.json();
    return data.genres;
}