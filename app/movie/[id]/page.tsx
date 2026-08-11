
import MoviesDetailsPage from "@/app/Containers/MoviesDetailsPage";
type Props = {
    params:Promise<{
        id: number;
    }>
}
export default function Page({ params }: Props) {
    const {id} =  params;
    return <MoviesDetailsPage id={Number(id)}/>}