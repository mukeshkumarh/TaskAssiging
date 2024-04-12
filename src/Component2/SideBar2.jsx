import React from 'react'
import {SidebarData2} from './SideBarData2'
import './SideBar2.css'
export default function SideBar2() {
  return (
   <>
     <div className="sidebar">
      <h1>SWIFT</h1>
        <ul className="sidebarList">
          {SidebarData2.map((val, key) => {
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
