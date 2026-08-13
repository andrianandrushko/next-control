
import MoviesDetailsPage from "@/src/app/Containers/MoviesDetailsPage";

type Props = {
    params:Promise<{
        id: string;
    }>
}
export default async function Page({ params }: Props) {
    const {id} = await params;
    return <MoviesDetailsPage id={id}/>
}