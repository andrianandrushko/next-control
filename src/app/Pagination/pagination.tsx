import Link from "next/link";

type Props = {
    pg: string;
};

const Pagination = ({ pg }: Props) => {
    const currentPage = Number(pg) || 1;

    return (
        <div className="next-prev">
            <Link
                className="next"
                href={`?pg=${currentPage + 1}`}
            >
                next
            </Link>

            <Link
                className="prev"
                href={`?pg=${Math.max(1, currentPage - 1)}`}
            >
                prev
            </Link>
        </div>
    );
};

export default Pagination;
