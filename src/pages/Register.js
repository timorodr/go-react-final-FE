import React, { useState } from 'react'
import Nav from '../components/Nav'

const Register = () => {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const submit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${process.env.REACT_APP_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            first_name,
            last_name,
            password,
            email,
            phone,
            )
        })

        const content = await response.json()
        console.log(content)
    }

    
    return (  
        <div>
            <Nav/>
            <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please Signup</h1>

                {/* <div className="form-floating">
                <input className="form-control" id="floatingInput" placeholder="Name" required
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="floatingInput">Name</label>
                </div> */}
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="First Name" required
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="floatingInput">First Name</label>
                </div>
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" required
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingPassword" placeholder="Phone" required
                    onChange={e => setPhone(e.target.value)}
                />
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
            </form>
            </main>
        </div>
    )
}

export default Register