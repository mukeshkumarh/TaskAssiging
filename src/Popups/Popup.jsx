import React from 'react'
import './Popup.css'
import { MdCancel } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
export default function Popup() {
  return (
   <>
    <div className='main-contaimar'>
<div className='content'>
    <div className='header'>
        <h3>Add a new vendor/supplier</h3>
        <label className='fa-times'><MdCancel /></label>
    </div>
    
<label className='vendor'>Vendor profile picture</label>
<div  className='upload'>
<FaCloudUploadAlt className='logo' />
<h5 className='text'>click to upload</h5>
</div>

<div className='placeholder'>
<input placeholder='Vendor Name' type='text'/>
<br/>
<br/>
<input placeholder='Company Name' type='text'/>
<br/>
<br/>
<input placeholder='Category' type='text'/>
<br/>
<br/>
<input placeholder='Mobile number' type='text'/>
<br/>
<br/>
<input placeholder='Email ID' type='text'/>
<br/>
<br/>
<input placeholder='GSTIN Number' type='text'/>
</div>

<label className='vendor2'>Upload document</label>
<div className='second-contenar'>
<input placeholder='Company PAN' type='email'/>
<br/>
<br/>
<input placeholder='Company GST' type='email'/>
</div>

<div className='second-contenar1'>
<input placeholder='Company TAN' type='contact'/>
<br/>
<br/>
<input placeholder='Company Contact' type='contact'/>
</div>

<div className='sumbt'>
<footer className="login-footeeer1">
                <button className="Button0" type="submit">
                  Submit
                </button>
              </footer>
              </div>
</div>
    </div>
   </>
  )
}
