import React from 'react'
import './SideBar6.css'
import {SideBarData6} from './SideBarData6'
export default function SideBar6() {
  return (
    <>
  <div className="sidebar">
      <h1>SWIFT</h1>
        <ul className="sidebarList">
          {SideBarData6.map((val, key) => {
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
