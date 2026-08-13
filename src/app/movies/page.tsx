import MoviesPage from "@/src/app/Containers/MoviesPage";

type Props = {
    searchParams: Promise<{
        pg?: string;
        q?: string;
        sortBy?: string;
        genreId?: string;
    }>;
};

export default async function Page({ searchParams }: Props) {
    return <MoviesPage searchParams={searchParams} />;
}