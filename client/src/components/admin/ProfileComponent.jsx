import React from 'react'
import '../../stylesheets/ProfileButton.css';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export default function ProfileComponent() {
    return (
        <div className="profile-options-container">
            <div className="manage-account-container">
                <i className='profile-options-icon'><ManageAccountsOutlinedIcon/></i>
                <p className="option" ><a href='/'>Manage Account</a></p>
            </div>
            <div className="signOut-container">
            <i className='profile-options-icon'><ExitToAppOutlinedIcon/></i>
            <p className="option"><a href='/'>Sign out</a></p>
            </div>
        </div>
    )
}
