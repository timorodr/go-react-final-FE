import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://hilarious-biscotti-0d1872.netlify.app/">Home</a>

                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://hilarious-biscotti-0d1872.netlify.app/login">Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://hilarious-biscotti-0d1872.netlify.app/signup">Register</a>
                    </li>
                </ul>

            </div>
            </nav>
        </div>
    )
}

export default Nav