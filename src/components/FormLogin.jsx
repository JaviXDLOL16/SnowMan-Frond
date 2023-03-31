import React from "react";
import "../styles/Login.css";

import { Outlet, Link, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const login = (e) => {
    e.preventDefault();

    fetch('http://localhost:3005/usuarios/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setToken(data.token)})
      .catch(err => { console.warn(err) })

  }

  const TokenCorrect = () => {

    localStorage.setItem("token", JSON.stringify(token))

    window.location.reload(true);

    return (
      < Navigate to="/control-panel" replace={true} />
    )

  }


  

  return (
    <div class="container">

      {token && TokenCorrect()}

      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="card bg-white">
            <div class="card-body p-5">
              <form class="mb-3 mt-md-4" onSubmit={login}>
                <h2 class="fw-bold mb-2 text-uppercase ">The Snow Man</h2>
                <p class=" mb-5">Panel de administración</p>
                <div class="mb-3">
                  <label for="email" class="form-label ">
                    Correo electrónico administrativo
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label ">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <p class="small">

                </p>
                <div class="d-grid">
                  <button class="btn btn-outline-dark" type="submit">
                    Login
                  </button>
                </div>
              </form>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
