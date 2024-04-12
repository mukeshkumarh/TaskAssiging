import React from 'react'
import "./SideBar4.css"
import {SideBarData4} from './SideBarData4'
export default function SideBar4() {
  return (
    <>
         <div className="sidebar">
      <h1>SWIFT</h1>
        <ul className="sidebarList">
          {SideBarData4.map((val, key) => {
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
