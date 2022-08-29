import Image from "next/image";
import Link from "next/link";

export default function MovieBox({ movie }) {
    return (
        <Link href={`/movie/${movie.id}`}>
            <div className="mb-10 bg-red-200 rounded-md shadow-sm cursor-pointer hover:bg-red-500">
                <Image src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} width={700} height={800}
                    className="rounded-t-md"
                />
                <div className="px-6 py-2">
                    <div className="mb-1 text-xl font-bold">{movie.title}</div>
                    <p className="mb-1 text-base text-gray-700">{movie.release_date}</p>
                </div>
            </div>
        </Link>
    )
}