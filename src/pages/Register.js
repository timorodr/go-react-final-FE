import React, { useState } from 'react'
import Nav from '../components/Nav'
import { Form } from "react-router-dom"

const Register = () => {


    
    return (  
        <div>
            <Nav/>
            <main className="form-signin w-100 m-auto">
            <Form action='/signup' method='POST'>
                <h1 className="h3 mb-3 fw-normal">Please Signup</h1>

                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="First Name" name='first_name'/>
                <label htmlFor="floatingInput">First Name</label>
                </div>

                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" name='last_name'/>
                <label htmlFor="floatingInput">Last Name</label>
                </div>

                <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required name='email'/>
                <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required name='password'/>
                <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating">
                <input type="text" className="form-control" id="floatingPassword" placeholder="Phone" name='phone'/>
                <label htmlFor="floatingPassword">Phone</label>
                </div>

                <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
                <p className="mt-5 mb-3 text-body-secondary">&copy; 2024</p>
            </Form>
            </main>
        </div>
    )
}

export default Register