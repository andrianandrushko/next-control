import "server-only";

const MYTOKEN = process.env.TMDB_API_TOKEN;

export async function getMovies() {
    const res = await fetch("https://api.themoviedb.org/3/discover/movie", {
        headers: { Authorization: `Bearer ${MYTOKEN}`},
        next: { revalidate: 3600 },
    });
    if (!res.ok) {
        throw new Error(`TMDB error: ${res.status}`);
    }
    return res.json();
}