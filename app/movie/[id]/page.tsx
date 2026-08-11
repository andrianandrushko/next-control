
import MoviesDetailsPage from "@/app/Containers/MoviesDetailsPage";
type Props = {
    id: string;
}
export default function Page({ id }: Props) {
    return <MoviesDetailsPage id={id}/>}