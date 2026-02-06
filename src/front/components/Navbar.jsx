import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {

	const location = useLocation();
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				{location.pathname !== '/' && (
				<Link to="/" className="text-decoration-none">
					<span className="navbar-brand mb-0"><i className="fa-solid fa-arrow-left"></i> Home</span>
				</Link>
				)}
				<div className="ms-auto">
				{location.pathname !=='/register' && (
					<Link to="/register">
						<button className="btn btn-primary text-end ">Sing Up</button>
					</Link>
				)}
				</div>
			</div>
		</nav>
	);
};