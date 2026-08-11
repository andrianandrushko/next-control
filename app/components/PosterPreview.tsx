import Image from 'next/image';

type Props = {
    poster_path: string,
}

const PosterPreview = ({ poster_path }: Props) => {
    return (
        <div>
            <Image  src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Movie poster" width={600} height={700} unoptimized/>
        </div>
    );
};

export default PosterPreview;