import React from 'react'
import{SidebarData3} from './SideBarData3'
import './SideBar3.css'
export default function SideBar3() {
  return (
    <>
      <div className="sidebar">
      <h1>SWIFT</h1>
        <ul className="sidebarList">
          {SidebarData3.map((val, key) => {
            return (
              <>
                <li key={key} onClick={(window.location.pathname = val.link)} className="row">
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </li>
                
              </>
            );
          })}
        </ul>
        
      </div>
    </>
  )
}

   
