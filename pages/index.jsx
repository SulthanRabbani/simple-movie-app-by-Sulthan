import axios from "axios"
import PopularMovies from "../components/PopularMovies"
export default function Home(props) {
    return (
        <div className="bg-white">
            <PopularMovies movies={props.movies.results} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const movies = res.data
    return {
        props: { movies }, // will be passed to the page component as props
    }

}