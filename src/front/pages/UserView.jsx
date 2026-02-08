import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { userCheck, getRantedMovies, getRantedTv, getUpcommigMovies } from "../services/backendServices.js"
import logoFlixy from "../assets/img/LogoFlixy.png"

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

        if (!response) {
            navigate('/')
            console.log('error');

            return
        } else {
            setUser(response)
            await getDashboard()
            setLoading(false)
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
            <div className="container mt-2">
                <img className="col-3 img-fluid d-block mx-auto" src={logoFlixy} alt="" />
                {loading ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <>
                        <h1 className="fw-bold text-white mb-4">Hola, {user.name}</h1>
                        <h3 className="text-white">Películas populares</h3>
                        <div className="d-flex overflow-x-auto p-4 gap-3">
                            {movies.map((movie) => (
                                <div className="card g-2 bg-dark-subtle border-0" style={{ minWidth: '18rem' }} key={movie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        className="card-img-top text-truncate"
                                        alt=""
                                        style={{ height: "350px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h6 className="card-title">{movie.title}</h6>
                                        <span className="badge text-bg-warning mb-2">
                                            {movie.vote_average.toFixed(1)}
                                        </span>
                                        <Link to={`/movie/${movie.id}`} className="btn btn-primary w-100">
                                            Detalles
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-white mt-4">Series populares</h3>
                        <div className="d-flex overflow-x-auto p-4 gap-3">
                            {series.map((series) => (
                                <div className="card g-2 bg-dark-subtle border-0" style={{ minWidth: '18rem' }} key={series.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                                        className="card-img-top "
                                        alt=""
                                        style={{ height: "350px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h6 className="card-title text-truncate">{series.name}</h6>
                                        <span className="badge text-bg-warning mb-2">
                                            {series.vote_average.toFixed(1)}
                                        </span>
                                        <Link to={`/serie/${series.id}`} className="btn btn-primary w-100">
                                            Detalles
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-white mt-4">Proximamente</h3>
                        <div className="d-flex overflow-x-auto p-4 gap-3">
                            {upcomingMovies.map((upcomingMovie) => (
                                <div className="card g-2 bg-dark-subtle border-0" style={{ minWidth: '18rem' }} key={upcomingMovie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${upcomingMovie.poster_path}`}
                                        className="card-img-top"
                                        alt=""
                                        style={{ height: "350px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h6 className="card-title text-truncate">{upcomingMovie.title}</h6>
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