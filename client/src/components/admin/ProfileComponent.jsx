import React from 'react'
import '../../stylesheets/ProfileButton.css';

export default function ProfileComponent() {
    return (
        <div className="profile-options-container">
            <div className="manage-account-container ">
                <img className="profile-options-icon" src="images/manageAcc.png" alt="manage-account-icon"/>
                <p className="option" ><a href='/'>Manage Account</a></p>
            </div>
            <div className="signOut-container">
                <img className="profile-options-icon" src="images/signout.png" alt="signOut-icon"/>
                <p className="option"><a href='/'>Sign out</a></p>
            </div>
        </div>
    )
}
