import React from 'react'
import '../styles/Navbar.css'


function Navbar() {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle d-flex align-items-center"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/76/70/83/1000_F_376708305_5IPXL5iH0uC7zQtRphgdamMJFLQcJyAE.jpg"
            class="rounded-circle"
            height="22"
            loading="lazy"
          />
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar;