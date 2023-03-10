import "./sidebar.css"
import React from "react"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className ="sidebaritem">
        <span className="sidebartitle">About Me</span>
        <img className="sidebarimg" src="https://i.pinimg.com/474x/7b/d0/ce/7bd0ce74960ad099a34c2c1503b4bc6f.jpg" alt="img"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt, veniam nihil eius doloribus harum vitae iusto consequuntur, quo porro magni molestiae. Quidem, molestias inventore sapiente nobis ea odio impedit.</p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle"> Categories</span>
        <ul className="sidebarList">
            <li className="sidebarlistitem">Life</li>
            <li className="sidebarlistitem">Music</li>
            <li className="sidebarlistitem">Cinema</li>
            <li className="sidebarlistitem">Space & Tech</li>
            <li className="sidebarlistitem">Sports</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Follow Us</span>
        <div className="sidebarsocial">
            <i className="sidebaricon fa-brands fa-facebook"></i>
            <i className="sidebaricon fa-brands fa-twitter"></i>
            <i className="sidebaricon fa-brands fa-whatsapp"></i>
            <i className="sidebaricon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}
