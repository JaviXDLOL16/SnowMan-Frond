import React from "react";
import '../styles/FormContainer.css'




function FormContainer() {

    return (
   <div  className="container-freezer" >
    <div className="nav-data">
    <table class="table">
  <thead>
    <tr>
      <th>No</th>
      <th>Data</th>
      <th>Information</th>
      <th>Sign</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Temperature</td>
      <td>°</td>
      <td>          <img
            src="https://cdn-icons-png.flaticon.com/512/1959/1959311.png"
            height="26"
            loading="lazy"
          /></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Humidity</td>
      <td>°</td>
      <td>          <img
            src="https://cdn-icons-png.flaticon.com/512/2828/2828582.png"
            height="26"
            loading="lazy"
          /></td>
    </tr>
    <tr>
    </tr>
  </tbody>
</table>
    </div>

    <div className='container-table'>
    <table class="table">
  <thead>
    <tr>
      <th>No</th>
      <th>Ice cream</th>
      <th>Quantity</th>
      <th>Caducity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>----</td>
      <td>----</td>
      <td>----</td>
    </tr>
    <tr>
      <td>2</td>
      <td>----</td>
      <td>----</td>
      <td>----</td>
    </tr>
    <tr>
      <td>3</td>
      <td>----</td>
      <td>----</td>
      <td>----</td>
    </tr>
  </tbody>
</table>
</div>
   </div>
    );
}

export default FormContainer;