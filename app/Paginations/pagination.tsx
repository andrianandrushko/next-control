import React from 'react';
import Link from "next/link";

type Props = {
    pg: string;
}
const Pagination = ({ pg }: Props) => {
    const currentPage = Number(pg) || 1;
    return (
        <div className='next-prev'>
             <button className='next'>
                 <Link
                     href={`?pg=${currentPage + 1}`}>
                 </Link>
                 next</button>

            {currentPage > 1 &&
              <button className='prev'>
                  <Link
                      href={`?pg=${currentPage -1}`}
                  ></Link>
                  prev</button>
            }
        </div>
    );
};

export default Pagination;