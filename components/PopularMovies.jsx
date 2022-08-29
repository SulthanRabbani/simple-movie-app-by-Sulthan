import { useState } from "react";
import MovieBox from "./MovieBox";
import axios from "axios";

export default function PopularMovies({ movies }) {
    const [initialData, setInitialData] = useState({ movies })
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="container px-4 pb-10 mx-auto bg-white max-w-7xl">
            <div className="flex flex-col justify-between pt-5 mb-5 sm:flex-row">
                <h1 className="text-2xl text-black font-michroma">Popular Movies</h1>
                <input type="text" onChange={event => { setSearchTerm(event.target.value) }} className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 pl-10 p-2.5" placeholder="Search Movie" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {initialData.movies.filter((movie => {
                    if (searchTerm == '') {
                        return movie
                    } else if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return movie
                    }
                })).map(movie => <MovieBox movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}