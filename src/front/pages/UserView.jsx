import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { userCheck } from "../services/backendServices.js"

export const UserView = () => {

    const navigate = useNavigate()
    
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const checkToken = async () => {
        const response = await userCheck()
        if(!response.ok){
            navigate('/')
        }else{
            setUser(response)
            setLoading(false)
            navigate(`/users/${data.user.id}`)
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
            {loading ? (<div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>) : (

                <div className="text-center">
                    <h1>Hola, {user.name}</h1>
                </div>
            )}
        </>
    )
}