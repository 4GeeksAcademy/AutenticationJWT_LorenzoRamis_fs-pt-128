import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { userCheck, getRantedMovies, getRantedTv, getUpcommigMovies, getMovies } from "../services/backendServices.js"

export const UserView = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])
    const [upcomingMovies, setUpcomingMovi] = useState([])

    const getDashboard = async () => {

        const rantedTv = await getRantedTv()
        const rantedMovies = await getRantedMovies()
        const comingMovies = await getUpcommigMovies()

        if (rantedTv) {
            setSeries(rantedTv)
        }
        if (rantedMovies) {
            setMovies(rantedMovies)
        }
        if (comingMovies) {
            setUpcomingMovi(comingMovies)
        }
    }

    const checkToken = async () => {
        const response = await userCheck()
        console.log("UserView:", response)

        if (response) {
            setUser(response)
            await getDashboard()
            setLoading(false)
            return
        } else {
            navigate('/')
        }
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        } else {
            checkToken()
        }
    }, [])

    return (
        <>
            <div className="container mt-5">
                {loading ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <>
                        <div className="mb-4">
                            <h1 className="fw-bold text-white">Hola, {user.name}</h1>
                            <h3 className="text-white">Películas mejor valoradas</h3>
                        </div>

                        <div className="d-flex overflow-x-auto p-4 gap-3">
                            {movies.map((movie) => (
                                <div className="card g-2 bg-dark-subtle" style={{ minWidth: '18rem' }} key={movie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        className="card-img-top"
                                        alt={movie.title}
                                        style={{ height: "350px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h6 className="card-title">{movie.title}</h6>
                                        <span className="badge bg-warning text-dark">
                                            {movie.vote_average}
                                        </span>
                                        <Link to={`/movie/${movie.id}`} className="btn btn-primary w-100">
                                            Detalles
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="d-flex overflow-x-auto p-4 gap-3">
                            {series.map((series) => (
                                <div className="card g-2 bg-dark-subtle" style={{ minWidth: '18rem' }} key={series.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                                        className="card-img-top"
                                        alt={series.name}
                                        style={{ height: "350px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h6 className="card-title">{series.name}</h6>
                                        <span className="badge bg-warning text-dark">
                                            {series.vote_average}
                                        </span>
                                        <button className="btn btn-primary w-100 mt-3">Detalles</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex overflow-x-auto p-4 gap-3">
                            {upcomingMovies.map((upcomingMovie) => (
                                <div className="card g-2 bg-dark-subtle" style={{ minWidth: '18rem' }} key={upcomingMovie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${upcomingMovie.poster_path}`}
                                        className="card-img-top"
                                        alt={upcomingMovie.title}
                                        style={{ height: "350px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h6 className="card-title">{upcomingMovie.title}</h6>
                                        <Link to={`/movie/${upcomingMovie.id}`} className="btn btn-primary w-100">
                                            Detalles
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}