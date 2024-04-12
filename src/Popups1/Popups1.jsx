import React from 'react'
import './Popups1.css'
import { MdCancel } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
export default function Popups1() {
  return (
    <>
  <div className='main-contaimar1'>
<div className='content1'>
    <div className='header1'>
        <h3 className='hr'>Add a new document</h3>
        <label className='fa-times1'><MdCancel /></label>
    </div>
    
<label className='vendor1'>Vendor profile picture</label>
<div  className='upload1'>
<FaCloudUploadAlt className='logo1' />
<h5 className='text1'>click to upload</h5>
</div>

<div className='placeholder1'>
<input placeholder='Vendor Name' type='text'/>
<br/>
<br/>
<input placeholder='Company Name' type='text'/>
<br/>
<br/>
<input placeholder='Category' type='text'/>
</div>

<label className='link'>Anyone with the link can see the document.</label>
<div className='click-containar'>
<input type='checkbox' className='chack'/>
<label className='yes'>Yes</label>
<input type='checkbox' className='chack'/>
<label className='No'>NO</label>
</div>

<div className='sumbt1'>
<footer className="login-footeeer11">
                <button className="Button00" type="submit">
                  Submit
                </button>
              </footer>
              </div>
</div>
    </div>
    </>
  )
}
