import React from 'react'
import {SideBarData5} from './SideBarData5'
import './SideBar5.css'
export default function SideBar5() {
  return (
    <>
 <div className="sidebar">
      <h1>SWIFT</h1>
        <ul className="sidebarList">
          {SideBarData5.map((val, key) => {
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
