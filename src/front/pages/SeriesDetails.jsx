import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getSeries } from "../services/backendServices"

export const SeriesDetails = () => {
    const { id } = useParams()
    const [serie, setSeries] = useState(null)
    const [loading, setLoading] = useState(true)

    const cardSerie = async () => {
        const data = await getSeries(id)
        if (data) {
            setSeries(data)
            setLoading(false)
        }
    }

    useEffect(() => {
        cardSerie()
    }, [])

    return (
        <>
            <div className="container mt-2">
                <Link to={`/users/`} className="btn btn-sm mb-2 text-white">
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
                                    src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
                                    className="img-fluid rounded-start"
                                    alt=""
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="d-flex justify-content-between">{serie.name} <span className="badge text-bg-warning align-content-center">{serie.vote_average.toFixed(1)}</span></h1>
                                    <p className="card-text"><span className="fw-bold">Descripción: </span>{serie.overview}</p>
                                    <p className="card-text"><span className="fw-bold">Título original: </span>{serie.original_name}</p>
                                    <p className="card-text"><span className="fw-bold">Género: </span>{serie.genres[0].name}</p>
                                    <p className="card-text"><span className="fw-bold">Lanzamiento: </span>{serie.first_air_date}</p>
                                    <p className="card-text"><span className="fw-bold">Plataforma: </span>{serie.networks[0].name}</p>
                                    <p className="card-text"><span className="fw-bold">Idioma original: </span>{serie.original_language}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};