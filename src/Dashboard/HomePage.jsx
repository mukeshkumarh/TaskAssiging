import React from 'react'
import './HomePage.css'
import { VscSearch } from "react-icons/vsc";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
export default function HomePage() {
  return (
   <>
<div className='main-containar'>
<div className='containar'>
<div className='second-contenar'>
<span>Good morning! Aditya, <samp className='font-size'> welcome to your swift board</samp></span>
<nav className='nave'>
<div className='button1-containar'>
<button className='button1'>on going task</button>
</div>
<div className='button2-containar'>
<button className='button2'>submitted tasks</button>
</div>
<div className='button3-containar'>
<button className='button3'>completed tasks</button>
</div>
</nav>

<div className='input-wrap'>
<input type='text' className='input'/>
<label className='name'>Search a task by name</label>
</div>

<div className='input-wra'>
<input type='text' className='Input'/>
<label className='Name'>Date</label>
</div>

<div className='input-Priority'>
<input type='text' className='Priority'/>
<label className='Prio'>Priority</label>
</div>

<footer className="login-footer">
                <button className="Button" type="submit">
                <VscSearch className='logo'/>
                  Search
                </button>
              </footer>


  <div className='button'>
<button className='bttn1'>
<IoMdAddCircleOutline className='Add' />
 </button>
<label className='btt1'>Your task(20)</label>
   </div>

   <div className='botton'>
<button className='btttn1'>
<IoMdAddCircleOutline className='aadd' />
 </button>
<label className='bttt1'>Team tasks(55)</label>
   </div>

<table className='table'>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
    <tr>
        <td><strong>|</strong></td>
    </tr>
   </table>

 
   <div className='card-containar'>

      </div>


<div className='card'>
<h5>High Priority</h5>
<CgCalendarDates className='date'/>
<FaPen  className='pen'/>
<BsThreeDotsVertical className='dot'/>
<p>get the new documents of land lease ready and submit to the layer</p>
</div>

<div className='card1'>
<h5 className='h51'>High Priority</h5>
<CgCalendarDates className='date1'/>
<FaPen  className='pen1'/>
<BsThreeDotsVertical className='dot1'/>
<p className='p1'>get the new documents of land lease ready and submit to the layer</p>
</div>


<div className='card2'>
<h5 className='h52'>High Priority</h5>
<CgCalendarDates className='date2'/>
<FaPen  className='pen2'/>
<BsThreeDotsVertical className='dot2'/>
<p className='p2'>get the new documents of land lease ready and submit to the layer</p>
</div>

<div className='card3'>
<h5 className='h53'>High Priority</h5>
<CgCalendarDates className='date3'/>
<FaPen  className='pen3'/>
<BsThreeDotsVertical className='dot3'/>
<p className='p3'>get the new documents of land lease ready and submit to the layer</p>
</div>

<div className='card4'>
<h5 className='h54'>High Priority</h5>
<CgCalendarDates className='date4'/>
<FaPen  className='pen4'/>
<BsThreeDotsVertical className='dot4'/>
<p className='p4'>get the new documents of land lease ready and submit to the layer</p>
</div>

</div>
</div>
</div>
   </>
  )
}
