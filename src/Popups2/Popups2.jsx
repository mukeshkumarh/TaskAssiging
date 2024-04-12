import React from 'react'
import './Popups2.css'
import { MdCancel } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
export default function Popups2() {
  return (
    <>
        <div className='main-contaimar4'>
<div className='content4'>
    <div className='header4'>
        <h3 className='vv4'>Add a new vendor/supplier</h3>
        <label className='fa-times4'><MdCancel /></label>
    </div>
    
<label className='vendor4'>Vendor profile picture</label>
<div  className='upload4'>
<FaCloudUploadAlt className='logo4' />
<h5 className='text4'>click to upload</h5>
</div>

<div className='placeholder4'>
<input placeholder='Name' type='text'/>
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
<input placeholder='Password' type='text'/>
</div>

<label className='vendor4'>Upload document</label>
<div className='second-contenar44'>
<input placeholder='Company PAN' type='email'/>
</div>


<div className='second-contenar4'>
<input placeholder='Company TAN' type='contact'/>
</div>
<div className='sumbt4'>
<footer className="login-footeeer4">
                <button className="Button4" type="submit">
                  Submit
                </button>
              </footer>
              </div>
</div>
    </div>
    </>
  )
}
