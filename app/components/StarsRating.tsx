import Image from "next/image";
type Props = {
    rating: number;
}
const StarsRating = ({rating}:Props) => {
    return (
        <div className='stars-rating'>
          <Image src='/star.gif' alt="star" width={32} height={32} className='star-info'/>{rating}</div>
    );
};

export default StarsRating;