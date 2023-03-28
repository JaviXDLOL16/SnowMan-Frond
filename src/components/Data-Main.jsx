import React from 'react'
import '../styles/Footer.css'


function Data({id,img,freezer,content}) {
    return (
        <tr>
        <th scope="row">{id}</th>
        <td><img
          src={img}
          height="90"
          loading="lazy"
        /></td>
        <td>{freezer}</td>
        <td>{content}</td>
        <td>
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id={id} />
            <label class="custom-control-label" for={id}></label>
          </div>
        </td>
      </tr>   
    )
}

export default Data;