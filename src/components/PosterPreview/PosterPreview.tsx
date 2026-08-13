import Image from 'next/image';

type Props = {
    poster_path: string | null,
}

const PosterPreview = ({ poster_path }: Props) => {
    if (!poster_path) {
    return null
    }
        return (
            <div>
                <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Movie poster" width={600} height={300}
                       unoptimized/>
            </div>
        );
    }

export default PosterPreview;