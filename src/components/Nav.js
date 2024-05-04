import React from 'react'
// import { useNavigate } from 'react-router-dom';

const Nav = () => {


    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{fontWeight: 600, fontSize: 28}}>MediManage</a>

                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/login" style={{fontWeight: 600, fontSize: 20}}>Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/signup" style={{fontWeight: 600, fontSize: 20}}>Register</a>
                    </li>
                </ul>

            </div>
            </nav>
        </div>
    )
}

export default Nav