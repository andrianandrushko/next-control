import Image from 'next/image';

type Props = {
    poster_path: string,
}

const PosterPreview = ({ poster_path }: Props) => {
    return (
        <div>
            <Image className='img' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Movie poster" width={500} height={750} unoptimized/>
        </div>
    );
};

export default PosterPreview;