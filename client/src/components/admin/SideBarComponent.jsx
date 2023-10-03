import React,{useState} from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { sidebarData } from "../Data/sidebarData";
import "../../stylesheets/sideNav.css";

export default function SideBarComponent() {

const [toggle,setToggle] = useState(false);

const toggleChange =()=>{
  if(toggle === false){
    setToggle(true)
  }
  else{setToggle(false)}
}

  return (
    <div className={toggle ? "Sidebar" : "sortSidebar"}>
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
              {toggle ? <div id="title">{val.title}</div> : <div></div>} 
            </li>
          );
        })}
      </ul>
    </div>
  );
}
