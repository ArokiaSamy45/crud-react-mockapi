import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title, styles, children}){
    const history = useHistory();
    return (
        <div>
            <div>
            <div className="nav-styles">
                
                <span>
                    <button 
                    className="nav-buttons"
                    onClick={()=>history.push("/add/user")}
                    >Add Student</button>
                </span>
                <span>
                    <button 
                    className="nav-buttons"
                    onClick={()=>history.push("/")}
                    >Student Dashboard</button>
                </span>
                
                <span>
                    <button 
                    className="nav-buttons"
                    onClick={()=>history.push("/add/mentor")}
                    >Add Mentor</button>
                </span>
                <span>
                    <button 
                    className="nav-buttons"
                    onClick={()=>history.push("/mentor/dashboard")}
                    >Mentor Dashboard</button>
                </span>
                
            </div>

            
                
            <div className="title">{title}</div>
            </div>

             <div className="childred">
                {children}
        <footer>
            Contact us
             <div>Email : react@email.com</div>
             <div>Phone : 80****456</div>
         </footer>
             
             </div>

        </div>
    )
}