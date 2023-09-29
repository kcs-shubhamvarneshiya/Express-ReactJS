import React,{useState} from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { sidebarData } from "../Data/sidebarData";
import "../../stylesheets/sideNav.css";

export default function SideBarComponent() {

const [toggle,setToggle] = useState("false"); 

const toggleChange =()=>{
  
}

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <div className="nav-left-side">
          <div className=""><i onClick={toggleChange}><MenuOpenIcon/></i></div>
        </div>
        {sidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={()=>{window.location.pathname = val.link}}
              id={window.location.pathname === val.link ? "active" : ""}
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
