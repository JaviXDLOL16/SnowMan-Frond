import React from 'react'
import '../styles/Main.css'


function Data({id,img,freezer,content,status}) {
    return (
        <tr>
        <th scope="row">{id}</th>
        <td><img
          src={"https://cdn.eticket.mx/imagenes/imgEventos/230330111216970_estelar_estChiapas.jpg"}
          height="90"
          loading="lazy"
          
        />
        <div className='container-file'>
        <input  class="form-control" type="file" id="formFile"></input>  
        </div>

        </td>
        <td>{freezer}</td>
        <td>{content}</td>
        <td>
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" checked={status} id={id} />
            <label class="custom-control-label" for={id}></label>
          </div>
        </td>
      </tr>   
    )
}

export default Data;