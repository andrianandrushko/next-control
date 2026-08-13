import {IMovie} from "@/src/app/models/IMovie";
import Image from "next/image";
type Props = {
    movie:IMovie;
}
const MovieInfo = ({movie}:Props) => {
    return (
        <div className="MovieInfo">
                <div>
                    <p className='title'>{movie.title}</p>
                    <p className='overview'><Image src='/description.gif' alt="description" width={20} height={20} className={'description'}/> : {movie.overview}</p>
                </div>
        </div>
    );
};

export default MovieInfo;