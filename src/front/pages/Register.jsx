import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../services/backendServices.js";

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
            <div className="container mt-5">
                <div className="row justify-conten-center">
                    <h1 className="text-center">REGISTER</h1>
                    <div className="col-12 col-md-6 rounded bg-white p-4 shadow mx-auto">
                        <form onSubmit={handleSumit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id='email'
                                    placeholder="Email"
                                    name="email"
                                    aria-describedby="email"
                                    value={user.email}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label" >Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label" >First name</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your Name"
                                    value={user.name}
                                    onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
} 