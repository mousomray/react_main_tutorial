import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <>
            {/*Nav area start */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Blog</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link mr-5" to="/">Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link mr-5" to="/post">Post</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="#mymodal" data-toggle='modal'>Login</Link>
                        </li>

                    </ul>
                </div>
            </nav>
            {/*Nav area end */}

            

        </>
    )
}

export default Nav
