import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getMovies } from "../services/backendServices"

export const MoviesDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    const cardMovie = async () => {
        const data = await getMovies(id)
        if (data) {
            setMovie(data)
            setLoading(false)
        }
    }

    useEffect(() => {
        cardMovie()
    }, [])

    return (
        <>
            <div className="container mt-2">
                <Link to={'/users/'} className="btn btn-sm mb-2 text-white">
                    Back
                </Link>
                {loading ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <div className="card mb-3 bg-dark-subtle border-0" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    className="img-fluid rounded-start"
                                    alt=""
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="d-flex justify-content-between">{movie.title} <span className="badge text-bg-warning align-content-center">{movie.vote_average.toFixed(1)}</span></h1>
                                    <p className="card-text"><span className="fw-bold">Descripción: </span>{movie.overview}</p>
                                    <p className="card-text"><span className="fw-bold">Género: </span>{movie.genres[0].name}</p>
                                    <p className="card-text"><span className="fw-bold">Título original: </span>{movie.original_title}</p>
                                    <p className="card-text"><span className="fw-bold">Lanzamiento: </span>{movie.release_date}</p>
                                    <p className="card-text"><span className="fw-bold">Idioma original: </span>{movie.original_language}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};