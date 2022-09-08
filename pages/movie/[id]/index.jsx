import axios from "axios"
import Image from "next/image"
import { useState } from "react"
import Rating from "@mui/material/Rating"

export default function Movie(props) {
    const apikey = "f2dec8829682e66048a9207eab81e44d"
    const apikeyy = process.env.REACT_APP_KEY_API_KEY
    const [MovieRating, setMovieRating] = useState(0)
    const RateMovie = async () => {
        const res = await axios({
            method: 'post',
            url: `https://api.themoviedb.org/3/movie/${props.movies.id}/rating?api_key=${apikey}`,
            data: {
                value: MovieRating,
            }
        });
        const data = await res.json()
        console.log(data)
    }
    const ResetRateMovie = () => {
        setMovieRating(0)
    }
    return (
        <div className="container max-w-4xl pt-6 mx-auto">
            <div className="px-3">
                <Image src={props.image}
                    alt={props.movies.title}
                    width={1000}
                    height={600} className="rounded-md"></Image>
                <h1 className="my-2 text-xl font-bold font-michroma">{props.movies.title}</h1>
                <p className="mt-4 text-sm text-gray-600">{props.movies.overview}</p>
                <p className="mt-5 text-sm text-gray-600">Genres: <span className="font-bold">{props.movies.genres.map(genre => genre.name).join(', ')}</span></p>
                <p className="text-sm text-gray-600">Release Date: <span className="font-bold">{props.movies.release_date}</span></p>
                <p className="text-sm text-gray-600">Movie Rating: <span className="font-bold">{props.movies.vote_average}</span></p>
                <p className="mt-5 text-sm text-gray-600">Rate It!</p>
                <div className="flex flex-row">
                    <Rating
                        name="simple-controlled"
                        max={5}
                        precision={0.5}
                        value={MovieRating}
                        onClick={RateMovie}
                        onChange={(event, newValue) => {
                            setMovieRating(newValue);
                        }}
                    />
                    {MovieRating == 0 ? "" : <button onClick={ResetRateMovie} className="ml-2 text-sm font-bold text-gray-600">Cancel</button>
                    }
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    const { id } = context.params
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const movies = res.data
    return {
        props: { movies, image: `https://image.tmdb.org/t/p/w500${movies.backdrop_path}` }, // will be passed to the page component as props
    }

}

export async function getStaticPaths(context) {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const movies = res.data.results
    const ids = movies.map(movie => movie.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false
    }

}