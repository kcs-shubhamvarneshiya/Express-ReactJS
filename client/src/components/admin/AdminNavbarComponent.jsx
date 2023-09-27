import React,{useState} from 'react';
import ProfileComponent from './ProfileComponent';
import '../../stylesheets/App.css'

export default function AdminNavbarComponent() {

    const [isProfileOptionVisible,setIsProfileOptionVisible] = useState(false)

    const toggleProfileOptions = ()=>{
        setIsProfileOptionVisible(!isProfileOptionVisible);
    }

    return (
        <div className='app'>
            {/* Navbar */}
            <div className='admin-nav'>
                <div className='admin-nav-header'>
                    <div className='admin-nav-title'>
                        <h4>SemiWaves</h4>
                    </div>
                </div>

                <div className='profile-button-container'>
                    <div onClick={toggleProfileOptions}><img className="profile-icon" src='images/profile.png' alt='profile icon'/></div>
                </div>
            </div>

            {/*Profile  toggle*/}
            <div className='profile-component'>
                {isProfileOptionVisible && <ProfileComponent/>}
            </div>

            {/** */}
        </div>
    )
}
