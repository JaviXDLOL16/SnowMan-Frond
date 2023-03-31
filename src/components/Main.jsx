import React from 'react'
import '../styles/Main.css'
import { Outlet, Link, Navigate } from 'react-router-dom'
import { useState, useEffect, Component } from 'react'
import Data from '../components/Data-Main'


function Main() {

  const [freezers, setFreezers] = useState([]);

    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));



  useEffect(() => {
    fetch('http://localhost:3005/fridge/listar')
      .then((response) => response.json())
      .then((data) => {
        setFreezers(data)
      });
  }, []);

  const ToHome = () => {
    return (
      < Navigate to="/" replace={true} />
    )
  }

  const Close = () => {
    localStorage.removeItem("token");
    window.location.reload(true);
  }


  return (

    <>
      {token == null && ToHome()}

      <button className="button-style"  onClick={() => {Close()}} type="submit" class="btn btn-danger my-1">Cerrar sesion</button>
      <div className="container-main">




        <div className="container-table">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">N°</th>
                <th scope="col">Image</th>
                <th scope="col">Contenedor</th>
                <th scope="col">Contenido</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>

              {freezers.map(freezer => {
                return (
                  <Data
                    img={freezer.image}
                    freezer={freezer.freezer}
                    content={freezer.content}
                    id={freezer.id}
                    status={freezer.status}
                  />
                )
              })}

            </tbody>
          </table>
        </div>

        <div className="container-form">
          <form className="container-text">

            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
              Select the freezer
            </label>
            <select
              class="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option style={{ textAlign: "center" }} selected>
                Choose...
              </option>
              <option>Exhibition</option>
              <option>Store</option>
              <option>Low temperature</option>
              <option>Vertical</option>
              <option>Horizontal </option>
            </select>

            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
              Select the content
            </label>
            <select
              class="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option style={{ textAlign: "center" }} selected>
                Choose...
              </option>
              <option>Ice cream</option>
              <option>Popsicles</option>
              <option>Milkshakes</option>
              <option>Sundaes</option>
            </select>

            <button
              className="button-style"
              type="submit"
              class="btn btn-primary my-1"
            >
              Send
            </button>
          </form>
        </div>

      </div>
    </>
  );
}

export default Main;