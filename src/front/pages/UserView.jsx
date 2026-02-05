import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const UserView = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        } else {
            setLoading(false)
        }
    }, [])
    return (
        <>
            {loading ? (<div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>) : (

                <div className="text-center">
                    <h1>Hola</h1>
                </div>
            )}
        </>
    )
}