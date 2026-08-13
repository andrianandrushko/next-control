import Link from "next/link";

type Props = {
    pg: string;
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
};

const Pagination = ({ pg, searchParams }: Props) => {
    const currentPage = Number(pg) || 1;

    const nextParams = new URLSearchParams();

    Object.entries(searchParams).forEach(([key, value]) => {
        if (typeof value === "string") {
            nextParams.set(key, value);
        }
    });

    nextParams.set("pg", String(currentPage + 1));

    const prevParams = new URLSearchParams();

    Object.entries(searchParams).forEach(([key, value]) => {
        if (typeof value === "string") {
            prevParams.set(key, value);
        }
    });

    prevParams.set("pg", String(Math.max(1, currentPage - 1)));

    return (
        <div className="next-prev">
            <Link
                className="next"
                href={`?${nextParams.toString()}`}
            >
                next
            </Link>

            <Link
                className="prev"
                href={`?${prevParams.toString()}`}
            >
                prev
            </Link>
        </div>
    );
};

export default Pagination;
