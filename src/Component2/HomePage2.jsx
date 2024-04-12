import React from 'react'
import { VscSearch } from "react-icons/vsc";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import './HomePage2.css'
export default function HomePage2() {
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
             
<div></div>
<div className='card-cont'>
    <div className='Card-cont2'>
    <h5 className='h54'>High Priority</h5>
<CgCalendarDates className='date4'/>
<FaPen  className='pen4'/>
<BsThreeDotsVertical className='dot4'/>
<h5 className='header'>Get the new Documents of land lease ready and submit to the lawyer</h5>
<div className='containt'>
<p className='main-containt'>Get the basement cleared and redesign it with a
inter designer to <br/> start and giving it for rental for filming space on hourly</p>

</div>
    </div>
</div>

<div className='card-cont2'>
    <div className='Card-cont3'>
    <h5 className='h55'>High Priority</h5>
<CgCalendarDates className='date5'/>
<FaPen  className='pen5'/>
<BsThreeDotsVertical className='dot5'/>
<h5 className='header1'>Get the new Documents of land lease ready and submit to the lawyer</h5>
<div className='containt1'>
<p className='main-containt1'>Get the basement cleared and redesign it with a
inter designer to <br/> start and giving it for rental for filming space on hourly</p>

</div>
    </div>
</div>


</div>
</div>
</div>
   </>
  )
}
