import React from "react";
import AdminNavbarComponent from "../../components/admin/AdminNavbarComponent";
import SideBarComponent from "../../components/admin/SideBarComponent";
import '../../stylesheets/sideNav.css'

export default function MainComponent() {
  return (
    <>
      <div>
        <div className="admin-navbar">
          <AdminNavbarComponent />
        </div>

        <div className="admin-slider-navbar">
          <SideBarComponent />
        </div>
      </div>
    </>
  );
}
