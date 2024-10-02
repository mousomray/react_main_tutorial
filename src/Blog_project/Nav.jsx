import React from 'react'
import { Link } from 'react-router-dom/dist'

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to='/'>Blog</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active mr-5">
              <a class="nav-link" href="#">Post</a>
            </li>
            <li class="nav-item  active mr-5">
              <a class="nav-link" href="#">Login</a>
            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
