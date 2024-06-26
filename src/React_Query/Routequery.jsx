import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import User from './User'
import Register from './Register'

// Import QueryClient for React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const Routequery = () => {

    // Create a client
    const queryClient = new QueryClient()

    return (
        <>
            {/*Cover with QueryClientProvider*/}
            <QueryClientProvider client={queryClient}>
                <Router>
                    <Nav />
                    <Routes>
                        <Route path='/' element={<Register />} />
                        <Route path='/user' element={<User />} />
                    </Routes>
                </Router>
            </QueryClientProvider>
        </>
    )
}

export default Routequery
