import { Link, useLocation, useNavigate } from "react-router-dom"
import IconFlixy from "../assets/img/IconFlixy.png"

export const Navbar = () => {


	const location = useLocation()

	const handleLogOut = () => {
		localStorage.removeItem('token')
	}

	const notMenu = location.pathname == '/' || location.pathname == '/register'
	const notSingUp = location.pathname.includes('/users/') || location.pathname == '/register' || location.pathname.includes('/movie/') || location.pathname.includes('/serie/')

	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to={'/users/'} className="btn btn-sm text-white">
					<img className="img-fluid" 
					src={IconFlixy} 
					alt="" 
					style={{ width: "25px" }}/>
				</Link>

				<div className="ms-auto d-flex align-items-center gap-2">

					{!notMenu && (
						<button className="btn btn-dark"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasWithBothOptions"
							aria-controls="offcanvasWithBothOptions">
							<i className="fa-solid fa-bars"></i>
						</button>
					)}
					<div className="offcanvas offcanvas-end bg-dark"
						data-bs-scroll="true"
						tabIndex="-1"
						id="offcanvasWithBothOptions"
						aria-labelledby="offcanvasWithBothOptionsLabel">
						<div className="offcanvas-header">
							<h5 className="offcanvas-title text-white" id="offcanvasWithBothOptionsLabel">Menu</h5>
							<div data-bs-theme="dark">
								<button type="button"
									className="btn-close"
									data-bs-dismiss="offcanvas"
									aria-label="Close"></button>
							</div>
						</div>
						<div className="offcanvas-body">
							<p className="text-white text-center">
								<i className="fa-solid fa-triangle-exclamation fa-xl" style={{ color: "rgb(255, 210, 61)" }}></i>
								EN MANTENIMENTO
								<i className="fa-solid fa-triangle-exclamation fa-xl" style={{ color: "rgb(255, 210, 61)" }}></i></p>
							<p className="text-white text-center">DISCULPEN LA MOLESTIA</p>
							<Link to="/" className="text-decoration-none">
								<span className="navbar-brand mb-0 text-danger"
									onClick={handleLogOut}>
									Cerrar sesión
								</span>
							</Link>
						</div>
					</div>

					<div className="ms-auto">
						{!notSingUp && (
							<Link to="/register">
								<button className="btn btn-primary text-end ">Registrase</button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}