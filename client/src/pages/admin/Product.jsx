import React from 'react'
import AdminNavbarComponent from '../../components/admin/AdminNavbarComponent'
import SideBarComponent from '../../components/admin/SideBarComponent'
import AddProductComponent from '../../components/admin/AddProductComponent'

export default function Product() {
    return (
        <div>
            <AdminNavbarComponent/>
            <SideBarComponent/>
            <div className=''>
              <AddProductComponent/>  
            </div>
        </div>
    )
}
