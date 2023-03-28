import React from 'react'
import '../styles/Main.css'
import { useState, useEffect, Component } from 'react'
import Data from '../components/Data-Main'


function Main() {

  const [freezers, setFreezers] = useState([]);


  useEffect(() => {
    fetch('192.168.205.251:3000/fridge/listar')
      .then(response => {console.log(response), response.json()})
      .then(data => setFreezers(data.data))
      .catch(error => console.error(error));
  }, [freezers]);
  



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
                img={freezer.img}
                freezer={freezer.freezer}
                content={freezer.content}
                id={freezer.id}
              />          
              )
            })}

          </tbody>
        </table>
      </div>

      <div className="container-form">
        <form className="container-text">
          <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
            Select the image
          </label>
          <input
            style={{ textAlign: "center" }}
            type="url"
            class="form-control"
            id="exampleInputEmail"
            placeholder="Url"
          />

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