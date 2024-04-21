import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Login = () => {
    const initialState = {
        email: "",
        password: ""
    };

    const [login, setLogin] = useState(initialState);
    const [error, setError] = useState({}) // Make usestate for error message
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    // Create a Validation function which is to make validation on form field
    const validation = () => {

        let error = {} // I take error a blank object 

        // If email is not present
        if (!login.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(login.email)
        ) {
            error.email = "Enter a valid Email"
        }

        // For password
        if (!login.password) {
            error.password = "Password is Required"
        } else if (login.password.length < 8) {
            error.password = "Password must be 8 characters"
        }

        return error
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });

        if (name === "email") {

            const pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

            if (value.length === 0) {
                setError({ ...error, email: "Email is required" })
            } else if (!value.match(pattern)) {
                setError({ ...error, email: "Email pattern should be abc@mail.com" })
            } else {
                setError({ ...error, [name]: "" })
            }
        }

        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "Password is required" })
                setLogin({ ...login, password: "" })
            } else {
                setError({ ...error, password: "" })
                setLogin({ ...login, password: value })
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setloading(true);

        let ErrorList = validation() // Call validation function in ErrorList variable 
        setError(validation())

        if (Object.keys(ErrorList).length === 0) {
            const apiUrl = "https://restapinodejs.onrender.com/api/login";

            axios.post(apiUrl, login)
                .then((response) => {
                    console.log(response);
                    setLogin(initialState);
                    toast.success(response.data.message);
                    setloading(false);
                    setTimeout(() => {
                        navigate('/blog')
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error.response.data);
                    const errorMessage = error.response.data.message;
                    toast.error(errorMessage);
                    setloading(false);
                });
        } else {
            setloading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <Layout>
                <div class="container-fluid py-5">
                    <div class="container py-5">
                        <div class="text-center mb-3 pb-3">
                            <h6 class="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Blog</h6>
                            <h1>Login</h1>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="contact-form bg-white" style={{ padding: '30px' }}>
                                    <form name="sentMessage" id="contactForm" noValidate onSubmit={handleSubmit} method='post'>
                                        <div class="control-group">
                                            <input type="email" class="form-control p-4" id="email" name='email' placeholder="Email"
                                                required data-validation-required-message="Please enter your email" onChange={handleChange} value={login.email} />
                                            <span style={{ color: 'red', display: 'block' }}> {error.email} </span>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="control-group">
                                            <input type="password" class="form-control p-4" id="password" name='password' placeholder="Password"
                                                required data-validation-required-message="Enter your valid password" onChange={handleChange} value={login.password} />
                                            <span style={{ color: 'red', display: 'block' }}> {error.password} </span>
                                            <p class="help-block text-danger"></p>
                                        </div>

                                        <div class="text-center">
                                            <button class="btn btn-primary py-3 px-4" type="submit" id="loginButton">
                                                {loading ?
                                                    <div className="spinner-border" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                    :
                                                    'Login'}
                                            </button>
                                            <Link to='/register' class="nav-item nav-link"><p>Don't have an account ? Register now</p></Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Login;
