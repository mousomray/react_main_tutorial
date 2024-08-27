import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav'
import User from './User'
import Adduser from './Adduser'

// Import QueryClient for React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const Routequery = () => {

    // Create a client
    const queryClient = new QueryClient()

    return (
        <>
            <ToastContainer />

            {/*Cover with QueryClientProvider*/}
            <QueryClientProvider client={queryClient}>
                <Router>
                    <Nav />
                    <Routes>
                        <Route path='/' element={<Adduser />} />
                        <Route path='/user' element={<User />} />
                    </Routes>
                </Router>
            </QueryClientProvider>
        </>
    )
}

export default Routequery
