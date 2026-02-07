import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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
        <div className="container mt-5">
            {loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="card mb-3" style={{ maxWidth: '540px', margin: '0 auto' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                className="img-fluid rounded-start"
                                alt={movie.title}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <p className="card-text">
                                    <small className="text-body-secondary">
                                        Lanzamiento: {movie.release_date}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};