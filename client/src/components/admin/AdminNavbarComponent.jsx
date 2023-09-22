import React,{useState} from 'react';
import ProfileComponent from './ProfileComponent';
import '../../stylesheets/index.css'

export default function AdminNavbarComponent() {

    const [isProfileOptionVisible,setIsProfileOptionVisible] = useState(false)

    const toggleProfileOptions = ()=>{
        setIsProfileOptionVisible(!isProfileOptionVisible);
    }

    return (
        <div className='app'>
            {/* Navbar */}
            <div className='nav'>
                <div className='nav-header'>
                    <div className='nav-title'>
                        <h4>SemiWaves</h4>
                    </div>
                </div>

                <div className='profile-button-container'>
                    <i className="fa-solid fa-user" onClick={toggleProfileOptions}></i>
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
