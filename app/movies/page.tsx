import MoviesPage from "@/app/Containers/MoviesPage";

type Props = {
    searchParams: Promise<{
        pg?: string;
    }>;
};

export default async function Page({ searchParams }: Props) {
    return <MoviesPage searchParams={searchParams} />;
}