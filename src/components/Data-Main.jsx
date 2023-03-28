import React from 'react'
import '../styles/Footer.css'


function Data() {
    return (
        <tr>
        <th scope="row">1</th>
        <td><img
          src="https://th.bing.com/th/id/OIP.H-3_NfItsxbqn71nB7J05wHaHy?pid=ImgDet&rs=1"
          height="90"
          loading="lazy"
        /></td>
        <td>Exhibition</td>
        <td>Drinks</td>
        <td>
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1" disabled checked/>
            <label class="custom-control-label" for="customSwitch1"></label>
          </div>
        </td>
      </tr>   
    )
}

export default Data;