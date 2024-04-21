import "./topbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function TopBar(){
    return(
        <div className="top">
           <div className="topleft">
                <i className="topicon fa-brands fa-facebook"></i>
                <i className="topicon fa-brands fa-twitter"></i>
                <i className="topicon fa-brands fa-whatsapp"></i>
                <i className="topicon fa-brands fa-instagram"></i>
            </div>
           <div className="topcenter">
            <ul className="toplist">
                <li className="toplistitem">
                <Link to="/" relative="path">Home</Link>
                </li>
                <li className="toplistitem">
                    <Link to="/about">About</Link>
                </li>
                <li className="toplistitem">
                <Link to="/write">Write Blog</Link>                   
                </li>         
                <li className="toplistitem">
                <Link to="/logout">Logout</Link>                    
                </li>
            </ul>
           </div>
           <div className="topright">
            <img className="topImg" src="https://i.pinimg.com/474x/7b/d0/ce/7bd0ce74960ad099a34c2c1503b4bc6f.jpg" alt="img"/>
            <ul className="toplist">
            <li className="toplistitem">
                <Link to="/login">Login</Link>                   
                </li>
                <li className="toplistitem">
                <Link to="/Register">Register</Link>                   
                </li>
            </ul>
            <i className="topSearch fa-solid fa-magnifying-glass"></i>
           </div>
        </div>
    )
}

