import React from 'react'
import Nav from '../components/Nav'
import { useState } from 'react'
import { Form } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    const landingPage = () => {
        navigate(`/landing`); // Navigate away when done
    };
    // const submit = async (e) => {
    //     e.preventDefault()

    //     const response = await fetch(`${process.env.REACT_APP_URL}/login`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(
    //         email,
    //         password,
    //         )
    //     })

    //     const content = await response.json()
    //     console.log(content)
    // }


    return (
        <div>
            <Nav/>
            <main className="form-signin w-100 m-auto">
            <Form action='/login' method='POST'>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email'
                    // onChange={e => setEmail(e.target.value)}
                />
                <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password'
                    // onChange={e => setPassword(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
                </div>

                <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit" onClick={landingPage}>Sign in</button>
                <p className="mt-5 mb-3 text-body-secondary">&copy; 2024</p>
            </Form>
            </main>
        </div>
    )
}

export default Login