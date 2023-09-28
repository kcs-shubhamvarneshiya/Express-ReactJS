import React from "react";
import AdminNavbarComponent from "./AdminNavbarComponent";
import SideBarComponent from "./SideBarComponent";

export default function MainComponent() {
  return (
    <>
      <div>
        {/* <div className="admin-navbar">
          <AdminNavbarComponent />
        </div> */}

        <div className="admin-slider-navbar">
          <SideBarComponent />
        </div>
      </div>
    </>
  );
}
