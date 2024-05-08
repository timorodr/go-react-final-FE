import { redirect } from "react-router-dom";

const baseUrl = process.env.REACT_APP_URL;


export const signupAction = async ({request}) => {
    ///get the form data from signup.js' Form
    const formData = await request.formData();
    //build out the object that we will sending to /signup
    const newUser = {
        email: formData.get('email'),
        password: formData.get('password'),
        phone: formData.get('phone')
    }

    //make the request to signup
    const response = await fetch(`${baseUrl}/signup`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    //after the request is made, the actions are below
    //if there is some error, handle it:
    if(response.status >= 400){
        alert(response.statusText)
        return redirect('/signup')
    }

    //if successful
    //redirect the user to /login
    return redirect('/login')
}

export const loginAction = async ({request}) => {
    ///get the form data from login.js' Form
    const formData = await request.formData();
    //build out the object that we will sending to /login
    const newUser = {
        email: formData.get('email'),
        password: formData.get('password')
        // phone: formData.get('phone')
    }

    //make the request to login
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    //after the request is made, the actions are below
    //if there is some error, handle it:
    if(response.status >= 400){
        alert(response.statusText)
        return redirect('/signup')
    }

    const data =  await response.json();
    console.log(data)
    localStorage.setItem('token', data.token)

    //if successful
    //redirect the user to /login
    return redirect('/landing')
}