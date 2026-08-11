import React from 'react';
import Image from "next/image";

const StarsRating = () => {
    return (
        <div className='stars-rating'>
            <Image src='/star.gif' alt="star" width={32} height={32} className='star-info' unoptimized />
        </div>
    );
};

export default StarsRating;