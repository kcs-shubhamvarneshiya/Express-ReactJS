import React from "react";
import "../../stylesheets/sideNav.css";
import { sidebarData } from "../Data/sidebarData";

export default function SideBarComponent() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {sidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={()=>{window.location.pathname = val.link}}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
