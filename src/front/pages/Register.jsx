import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { register } from "../services/backendServices.js";
import logoFlixy from "../assets/img/LogoFlixy.png";


export const Register = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSumit = (e) => {
        e.preventDefault()
        if (!user.email || !user.password || !user.name) {
            alert('All fields are requerid')
            return
        }
        register(user, navigate)
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <div className="container mt-2">
                <Link to={'/'} className="btn text-white">
                    Back
                </Link>
                <div className="row justify-conten-center">
                    <div className="col-12 col-md-6 rounded bg-transparent p-4 mx-auto">
                        <div className="container">
                            <img className="img-fluid" src={logoFlixy} alt="" />
                        </div>
                        <form onSubmit={handleSumit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-white">Correo</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id='email'
                                    placeholder="Correo"
                                    name="email"
                                    aria-describedby="email"
                                    value={user.email}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label text-white" >Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={user.password}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-white" >Nombre de usuario</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Nombre de usuario"
                                    value={user.name}
                                    onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
} 