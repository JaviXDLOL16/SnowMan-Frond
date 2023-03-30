import React from 'react'
import '../styles/Main.css'
import { useState, useEffect, Component } from 'react'
import Data from '../components/Data-Main'


function Main() {

  const [freezers, setFreezers] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/fridge/listar')
      .then((response) => response.json())
      .then((data) => setFreezers(data));
  }, []);




  return (
    <div className="container-main">
      <div className="container-table">
        <table class="table align-middle">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Image</th>
              <th scope="col">Freezers</th>
              <th scope="col">Content</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>

            {freezers.map(freezer=> {
              return(
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
  );
}

export default Main;