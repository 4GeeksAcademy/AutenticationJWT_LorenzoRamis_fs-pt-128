import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { login } from "../services/backendServices.js";
import { useNavigate } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate()
	const [user, setUser] = useState({
		email: '',
		password: ''
	})

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const handleSumit = (e) => {
		e.preventDefault()
		if (!user.email || !user.password) {
			alert('All fields are requerid')
			return
		}
		login(user, navigate)
	}

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()

			if (response.ok) dispatch({ type: "set_hello", payload: data.message })

			return data

		} catch (error) {
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}

	useEffect(() => {
		loadMessage()
	}, [])

	return (
		<>
			<div className="container mt-5">
				<div className="row justify-conten-center bg-transparent text-white">
					<div className="col-12 col-md-6 p-4 mx-auto">
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
							<button type="submit" className="btn btn-primary w-100">Submit</button>
						</form>
						<h1 className="mt-5 text-center">Live the movies</h1>
					</div>
					<div className="col-12 col-md-6">
						<div className="container text-center">
							<div className="row row-cols-2 g-2">
								<div className="col">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNFbcjoIX46OmX2x2G5vScPEAcsmOyZ-Ieg&s"
										className="img-fluid rounded shadow-sm"
										alt="poster 1"
									/>
								</div>
								<div className="col">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXFfBBA7y1XHgZo255sazxjMwNeHnzBvlvaQ&s"
										className="img-fluid rounded shadow-sm"
										alt="poster 1"
									/>
								</div>
								<div className="col">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiiVMfnZ-AAHvB-LuItFsHSLBJoIQGDiENA&s"
										className="img-fluid rounded shadow-sm"
										alt="poster 1"
									/>
								</div>
								<div className="col">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5GNQbjHXraDa7CxgIHXIK8Z1SGzGou0jZA&s"
										className="img-fluid rounded shadow-sm"
										alt="poster 1"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}; 