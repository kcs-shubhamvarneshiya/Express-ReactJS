import React from "react";
import AdminNavbarComponent from "../../components/admin/AdminNavbarComponent";
import SideBarComponent from "../../components/admin/SideBarComponent";

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
