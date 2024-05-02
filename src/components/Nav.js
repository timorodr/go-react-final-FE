import React from 'react'
import { useNavigate } from 'react-router-dom';

const Nav = () => {


    const navigate = useNavigate()


    const home = () => {
        navigate(`/`); // Navigate away when done
    };

    const login = () => {
        navigate(`/login`); // Navigate away when done
    };
    const signup = () => {
        navigate(`/signup`); // Navigate away when done
    };

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-brand" onClick={home}>Home</button>

                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    <button className="nav-link active" aria-current="page" onClick={login}>Login</button>
                    </li>
                    <li className="nav-item">
                    <button className="nav-link" onClick={signup}>Register</button>
                    </li>
                </ul>

            </div>
            </nav>
        </div>
    )
}

export default Nav