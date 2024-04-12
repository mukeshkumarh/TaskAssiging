import React from 'react'
import './HomePage6.css'
import { VscSearch } from "react-icons/vsc";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
export default function HomePage6() {
  return (
   <>
 <div className='main-containar'>
<div className='containar'>
<div className='second-contenar'>
<span>Good morning! Aditya, <samp className='font-size'> welcome to your swift board</samp></span>

<div className='input-wrap'>
<input type='text' className='input'/>
<label className='name'>Search by name/company</label>
</div>

<div className='input-wra'>
<input type='text' className='Input'/>
<label className='Name'>Date</label>
</div>

<footer className="login-footer">
                <button className="Button" type="submit">
                <VscSearch className='logo'/>
                  Search
                </button>
              </footer>

              <footer className="login-footer1">
                <button className="Button" type="submit">
                <IoAddCircleOutline className='logo' />
                add
                </button>
              </footer>

</div> 


<div className='main-card3'>
<div className='cards3'>
<div className='card3'>
<FaPencilAlt className='pen3' />
<img src="https://picsum.photos/200/300?random=1" className='image3'></img>
<h4 className='name3'>Ramesh Agrawal</h4>
<p className='agm'>AGM</p>
<h5 className='Mobile3'>Mobile: +91-8712144839</h5>
<h5 className='Mobile3'>Email: rameshagrewal@gmail.com</h5>


<div className='Dawn3'>
  <samp id='menu3'>Download PAN</samp>
</div>

<div className='Dawn3'>
  <samp id='menuu3'>Download GASTIN</samp>
</div>
</div>
</div>

<div className='cards3'>
<div className='card3'>
<FaPencilAlt className='pen3' />
<img src="https://picsum.photos/200/300?random=1" className='image3'></img>
<h4 className='name3'>Ramesh Agrawal</h4>
<p className='agm'>AGM</p>
<h5 className='Mobile3'>Mobile: +91-8712144839</h5>
<h5 className='Mobile3'>Email: rameshagrewal@gmail.com</h5>


<div className='Dawn3'>
  <samp id='menu3'>Download PAN</samp>
</div>

<div className='Dawn3'>
  <samp id='menuu3'>Download GASTIN</samp>
</div>
</div>
</div>

<div className='cards3'>
<div className='card3'>
<FaPencilAlt className='pen3' />
<img src="https://picsum.photos/200/300?random=1" className='image3'></img>
<h4 className='name3'>Ramesh Agrawal</h4>
{/* <p className='active'>Active</p> */}
<p className='agm'>AGM</p>
<h5 className='Mobile3'>Mobile: +91-8712144839</h5>
<h5 className='Mobile3'>Email: rameshagrewal@gmail.com</h5>


<div className='Dawn3'>
  <samp id='menu3'>Download PAN</samp>
</div>

<div className='Dawn3'>
  <samp id='menuu3'>Download GASTIN</samp>
</div>
</div>
</div>



</div>
</div>
</div>
   </>
  )
}
