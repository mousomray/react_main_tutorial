import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'

const Routing = () => {

    // Public Route For Public Page 
    const public_route = [
        {
            path: "/login",
            component: <Login />
        },
        {
            path: "/register",
            component: <Register />
        }
    ]

    // Private Route For Private Page
    const private_route = [
        {
            path: "/",
            component: <Home />
        }

    ]

    return (
        <>
            <Router>
                <Routes>
                    {
                        public_route?.map((value) => {
                            return (
                                <>
                                    <Route path={value.path} element={value.component} />
                                </>
                            )
                        })
                    }

                    {
                        private_route?.map((value) => {
                            return (
                                <>
                                    <Route path={value.path} element={value.component} />
                                </>
                            )
                        })
                    }
                </Routes>
            </Router>
        </>
    )
}

export default Routing
