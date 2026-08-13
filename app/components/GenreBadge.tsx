import {IGenre} from "@/app/models/IGenre";
type Props = {
    genres: IGenre[];
}
const GenreBadge = ({genres}:Props) => {
    return (
        <div>
            {
            genres.map(genre => (
                <div key={genre.id}>
                    <p className='genre'>genre name:{genre.name}</p>
                </div>
            ))
            }
        </div>
    );
};

export default GenreBadge;