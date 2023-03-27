import React from 'react'
import '../styles/Main.css'


function Main() {
    return (

<div className='container-main'>
  <div className='container-table'>
<table  class="table align-middle">
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



</td>
</tr>
<tr>
<th scope="row">2</th>
<td></td>
<td>Store</td>
<td>Popsicles</td>
<td>


<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="customSwitch2"/>
  <label class="custom-control-label" for="customSwitch2"></label>
</div>

</td>
</tr>
<tr>
<th scope="row">3</th>
<td>
</td>
<td>Low temperature</td>
<td>Frozen</td>
<td>



</td>
</tr>
</tbody>
</table>
</div>

<div className='container-form'>
 <form className='container-text'>
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Select the image</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option style={{textAlign:"center"}} selected>Choose...</option>
  </select>

  <button className='button-style' type="submit"  class="btn btn-primary my-1">Send</button>
</form> 
</div>
</div>



    )
}

export default Main;