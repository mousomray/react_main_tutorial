import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const style={
        color: 'white'
    }
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand" href="#" style={{color: 'white', fontWeight: 'bold', fontSize:'40px'}}> Brand</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/" style={style}>Users <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/user" style={style}>User_2</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/post" style={style}>Post</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar