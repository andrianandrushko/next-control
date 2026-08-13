import { IGenre } from "./IGenre";

export interface IMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    genre_ids: number[];
    genres: IGenre[];
    original_language: string;
    original_title: string;
    adult: boolean;
    video: boolean;
}