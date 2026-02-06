export const Register = () => {

    return (
        <>
            <div className="container">
                <h1 className="text-center">REGISTER</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter your Email" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" >Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your Password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label" >Name</label>
                        <input type="text" className="form-control" id="password" placeholder="Enter your name" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </>
    )
} 