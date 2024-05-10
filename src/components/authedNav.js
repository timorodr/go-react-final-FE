import React from 'react'
import { useNavigate } from 'react-router-dom'

const AuthedNav = () => {

    const navigate = useNavigate()

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/landing" style={{fontWeight: 600, fontSize: 28}}>MediManage</a>
                <a className="navbar-brand" style={{cursor: "pointer"}} onClick={() => {
                //remove the token
                    localStorage.removeItem('token')
                    // go back to the / route
                    navigate('/')
                }}>
                    Logout
                </a>

            </div>
            </nav>
        </div>
    )
}

export default AuthedNav