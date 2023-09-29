import React,{useState} from 'react';
import ProfileComponent from './ProfileComponent';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
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
                        <h4>Semi<span><WavesOutlinedIcon/></span></h4>
                    </div>
                </div>

                <div className='profile-button-container'>
                    <div onClick={toggleProfileOptions}><i className="profile-icon"><AssignmentIndOutlinedIcon/></i></div>
                </div>
            </div>

            {/*Profile  toggle*/}
            <div className='profile-component'>
                {isProfileOptionVisible && <ProfileComponent/>}
            </div>
            
        </div>
    )
}
