import "./sidebar.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">About Me</span>
        <img className="sidebarimg" src="https://i.pinimg.com/474x/7b/d0/ce/7bd0ce74960ad099a34c2c1503b4bc6f.jpg" alt="img" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt, veniam nihil eius doloribus harum vitae iusto consequuntur, quo porro magni molestiae. Quidem, molestias inventore sapiente nobis ea odio impedit.</p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle"> Categories</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} key={c._id} className="link"><li className="sidebarlistitem">{c.name}</li></Link>
          ))}       
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
