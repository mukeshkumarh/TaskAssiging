import React from "react";
import "./Home.css";
import { SidebarData } from "./SidebarData";
export default function Home() {
  return (
    <>
      <div className="sidebar">
      <h1>SWIFT</h1>
        <ul className="sidebarList">
          {SidebarData.map((val, key) => {
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
  );
}
