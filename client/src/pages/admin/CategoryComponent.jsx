import React from 'react'
import AdminNavbarComponent from '../../components/admin/AdminNavbarComponent'
import SideBarComponent from '../../components/admin/SideBarComponent'

export default function CategoryComponent() {
    return (
        <div>
            <div className=''>
            <AdminNavbarComponent/>
            </div>            

            <div>
            <SideBarComponent/>
            </div>

            <div>
                <p>Hello semicolon from multiverses</p><br/>
                <p>Hello semicolon from multiverses</p><br/>
                <p>Hello semicolon from multiverses</p>
            </div>
        </div>
    )
}
