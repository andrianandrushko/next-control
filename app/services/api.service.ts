import "server-only";

const TOKEN = process.env.TMDB_API_TOKEN;

export async function getMovies() {
    const res = await fetch("https://api.themoviedb.org/3/discover/movie", {
        headers: { Authorization: `Bearer ${TOKEN}` },
        next: { revalidate: 3600 },
    });
    return res.json();
}