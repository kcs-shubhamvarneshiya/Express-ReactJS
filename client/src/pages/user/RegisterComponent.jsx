import React ,{ useState } from "react";
import NavbarComponent from "../../components/User/NavbarComponent"

export default function RegisterComponent() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phoneno,setPhoneno] = useState("");
    const [address,setAddress] = useState("");
    const [open,setOpen]= useState(false);
    const [icon,setIcon] = useState("");
    const [type,setType] = useState("password");
    const [resType,setResType] = useState("error");

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <>
        <NavbarComponent/>
        <div className="register-container">
            <img src="svg/register.svg" alt="registeration"/>
            <div className="register-sub-container">
                <div className="register-form-header">
                    <h3>Sign Up</h3>
                </div>
                <form onSubmit={handleSubmit} className="modal-content animate">
                
                </form>
            </div>
        </div>
        </>
    )
}
