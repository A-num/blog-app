import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/singlepost";
import React from "react"

export default function single() {
  return (
    <div className="single">
      <SinglePost/>
        <Sidebar/>
        
    </div>
  )
}
